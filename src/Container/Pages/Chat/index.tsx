import ChatMessages from "Components/ChatMessages";
import RoomName from "Components/RoomName";
import SendMessage from "Components/SendMessage";
import UserName from "Components/UserName";
import React, { useRef, useState } from "react";
import Peer, { MeshRoom, RoomData } from "skyway-js";

export type chat = {
  user: string;
  text: string;
  meta?: object;
};

const peer = new Peer({ key: "7f6811d4-2b08-4bd7-8be8-cd036923e473" });

function Chat(): JSX.Element {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [chat, setChat] = useState<chat[]>([]);
  const room = useRef<any>();

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleRoomName = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setRoomName(event.target.value);
  };

  const handleInputSendMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSendMessage(event.target.value);
  };

  const handleClickSendMessage = () => {
    if (!room.current.send) return;
    room.current.send({ user: userName, text: sendMessage });
    setSendMessage("");
  };

  const joinHandler = () => {
    // P2P通信自体が出来ていない
    if (!peer.open) return;
    room.current = peer.joinRoom<MeshRoom>(roomName, { mode: "mesh" });
    if (room.current && room.current.on) {
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
            meta: { userId: src, type: "message" },
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
    }
  };

  return (
    <div>
      <div>
        <UserName onChange={handleUserName} />
        <RoomName
          onChange={(e) => handleRoomName(e)}
          onClick={joinHandler}
          disabled={false}
        />
      </div>
      <div>
        <ChatMessages messages={chat} />
        <SendMessage
          onChange={(e) => handleInputSendMessage(e)}
          onClick={handleClickSendMessage}
          value={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
