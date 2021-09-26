import { faUserAlt, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";

export type JoinCardProps = {
  children: JSX.Element;
  userNameOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  roomNameOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function JoinCard({
  children,
  userNameOnChange,
  roomNameOnChange,
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
      {children}
    </div>
  );
}

export default JoinCard;
