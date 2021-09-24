import Chat from "../Chat";
import styles from "./top.module.scss";

function Top(): JSX.Element {
  return (
    <div className={styles["site-wrapper"]}>
      <Chat />
    </div>
  );
}

export default Top;
