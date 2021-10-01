import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JoinCard from "components/JoinCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function Top(): JSX.Element {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleRoomName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>💬Simple React Chat Room</h1>
      <JoinCard
        userNameOnChange={handleUserName}
        roomNameOnChange={handleRoomName}
      >
        <Link
          to={`/chatroom?user=${userName}&room=${roomName}`}
          className={styles.link}
        >
          <div className={styles.buttonWrapper}>
            <FontAwesomeIcon
              className={styles.joinButtonIcon}
              icon={faUserSecret}
            />
            <div className={styles.joinButton}>
              <p>JOIN!</p>
            </div>
          </div>
        </Link>
      </JoinCard>
    </div>
  );
}

export default Top;
