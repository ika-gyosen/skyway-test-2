import ChatInput from "Components/ChatInput";
import ChatMessages from "Components/ChatMessages";
import { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Peer, { RoomData } from "skyway-js";
import styles from "./style.module.scss";

export type Chat = {
  text: string;
  user: string;
  meta: { type: "sys" | "message" | "receiveMessage" | "sendMessage" };
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ChatRoom(): JSX.Element {
  const usePeer = () => {
    const peerRef = useRef<Peer>();
    return (peerRef.current = new Peer({
      key: "7f6811d4-2b08-4bd7-8be8-cd036923e473",
    }));
  };
  const peer = usePeer();
  const room = useRef<any>();

  const history = useHistory();

  const [isLoad, setIsLoad] = useState(false);
  const [sendMessage, setSendMessage] = useState<string>("");
  const [chat, setChat] = useState<Chat[]>([]);

  const query = useQuery();
  const userName = query.get("user");
  const roomName = query.get("room");

  if (!roomName || !userName) {
    history.push("/");
  }
  useEffect(() => {
    peer.on("open", () => {
      if (!roomName || !userName) {
        history.push("/");
      }
      console.log(peer.id);
      setIsLoad(true);
      room.current = peer.joinRoom(roomName ? roomName : "", {
        mode: "mesh",
      });
      if (peer.joinRoom)
        room.current = peer.joinRoom(roomName ? roomName : "", {
          mode: "mesh",
        });
      setIsLoad(true);

      // 自分の入室完了イベント
      room.current.on("open", () => {
        setChat((prev) => [
          ...prev,
          {
            user: "システム",
            text: `${roomName}へ${userName}として入室しました。`,
            meta: { type: "sys" },
          },
        ]);
      });
      // data受信イベント
      room.current.on("data", ({ data, src }: RoomData) => {
        setChat((prev) => [
          ...prev,
          {
            user: data.user,
            text: data.text,
            meta: { userId: src, type: "receiveMessage" },
          },
        ]);
      });
      // 別ユーザーjoinイベント
      room.current.on("peerJoin", (peerId: string) => {
        setChat((prev) => [
          ...prev,
          {
            user: "システム",
            text: `${peerId}が入室しました。`,
            meta: { type: "sys" },
          },
        ]);
      });
      room.current.on("peerLeave", (peerId: string) => {
        setChat((prev) => [
          ...prev,
          {
            user: "システム",
            text: `${peerId}が退室しました。`,
            meta: { type: "sys" },
          },
        ]);
      });
      room.current.once("close", () => {
        setChat((prev) => [
          ...prev,
          {
            user: "システム",
            text: `${roomName}から退室しました。`,
            meta: { type: "sys" },
          },
        ]);
      });
    });
  }, []);

  const handleClickSendMessage = () => {
    if (room.current.send || room.current.send !== "") {
      setChat((prev) => [
        ...prev,
        {
          user: userName ? userName : "unknown",
          text: sendMessage,
          meta: { type: "sendMessage" },
        },
      ]);
      room.current.send({ text: sendMessage, user: userName });
      setSendMessage("");
    }
  };
  const handleInputSendMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSendMessage(event.target.value);
  };

  return (
    <div className={styles.chatRoomWrapper}>
      <h1 className={styles.title}>💬Simple React Chat Room</h1>
      {isLoad ? (
        <>
          <ChatMessages messages={chat} />
          <ChatInput
            onChange={handleInputSendMessage}
            onClick={handleClickSendMessage}
            currentInput={sendMessage}
          />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}

export default ChatRoom;
