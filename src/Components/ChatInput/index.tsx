import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";

export type ChatInputProps = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: () => void;
  currentInput: string;
};

function ChatInput({ onChange, onClick, currentInput }: ChatInputProps) {
  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        value={currentInput}
        onChange={(e) => {
          onChange(e);
        }}
        rows={1}
      />
      <button className={styles.button} onClick={onClick}>
        <FontAwesomeIcon
          title="send"
          className={styles.icon}
          icon={faPaperPlane}
        />
      </button>
    </div>
  );
}

export default ChatInput;
