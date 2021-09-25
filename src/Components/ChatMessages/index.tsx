import { chat } from "../../Container/Pages/Chat";
import { nanoid } from "nanoid";

export type ChatMessagesProps = {
  messages: chat[];
};

function ChatMessages({ messages }: ChatMessagesProps): JSX.Element {
  return (
    <>
      <ul>
        {messages.map(({ user, text }) => {
          return (
            <li key={nanoid()}>
              <p>
                {user}: {text}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ChatMessages;
