import {
  faUserAlt,
  faComments,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";

export type JoinCardProps = {
  userNameOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  roomNameOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onJoinClick: () => void;
};

function JoinCard({
  userNameOnChange,
  roomNameOnChange,
  onJoinClick,
}: JoinCardProps) {
  return (
    <div className={styles.settingCardWrapper}>
      <p>ユーザー名とルーム名を入力してください。</p>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon
          title="user"
          className={styles.icon}
          icon={faUserAlt}
        />
        <input
          className={styles.inputStyle}
          onChange={(e) => userNameOnChange(e)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon
          title="room"
          className={styles.icon}
          icon={faComments}
        />
        <input
          className={styles.inputStyle}
          onChange={(e) => roomNameOnChange(e)}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <FontAwesomeIcon
          className={styles.joinButtonIcon}
          icon={faUserSecret}
        />
        <div className={styles.joinButton}>
          <button onClick={onJoinClick}>JOIN!</button>
        </div>
      </div>
    </div>
  );
}

export default JoinCard;
