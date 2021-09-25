import { ChangeEventHandler, MouseEventHandler } from "react";

export type SendMessageProps = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
  value: string;
  disabled?: boolean;
};

function SendMessage({
  onChange,
  onClick,
  disabled,
  value,
}: SendMessageProps): JSX.Element {
  return (
    <>
      ルーム名
      <textarea onChange={onChange} value={value} />
      <button onClick={onClick} disabled={disabled}>
        Send
      </button>
    </>
  );
}

export default SendMessage;
