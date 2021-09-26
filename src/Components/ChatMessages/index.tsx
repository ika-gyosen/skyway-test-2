import { Chat } from "../../Container/Pages/ChatRoom";
import { nanoid } from "nanoid";
import styles from "./style.module.scss";

export type ChatMessagesProps = {
  messages: Chat[];
};

function ChatMessages({ messages }: ChatMessagesProps): JSX.Element {
  const chatFactory = messages.map((line) => {
    if (line.meta.type === "sys") {
      return (
        <li className={`${styles.baseWrapper} ${styles.sys}`} key={nanoid()}>
          <div>{line.text}</div>
        </li>
      );
    } else if (line.meta.type === "receiveMessage") {
      return (
        <li className={`${styles.baseWrapper} ${styles.other}`} key={nanoid()}>
          <div>{line.text}</div>
        </li>
      );
    } else if (line.meta.type === "sendMessage") {
      return (
        <li className={`${styles.baseWrapper} ${styles.my}`} key={nanoid()}>
          <div>{line.text}</div>
        </li>
      );
    }
    return (
      <li className={`${styles.baseWrapper} ${styles.sys}`} key={nanoid()}>
        ※メッセージを処理できません。
      </li>
    );
  });

  return (
    <div className={styles.chatWrapper}>
      <ul className={styles.ul}>{chatFactory}</ul>
    </div>
  );
}

export default ChatMessages;
