import JoinCard from "components/JoinCard";
import { useState } from "react";
import styles from "./style.module.scss";
import { useHistory } from "react-router";

function Top(): JSX.Element {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  const history = useHistory();
  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleRoomName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  const onJoinClick = () => {
    if (userName === "" || roomName === "") return;
    history.push({
      pathname: "/chatroom",
      state: { userName: userName, roomName: roomName },
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>💬Simple React Chat Room</h1>
      <JoinCard
        userNameOnChange={handleUserName}
        roomNameOnChange={handleRoomName}
        onJoinClick={onJoinClick}
      />
    </div>
  );
}

export default Top;
