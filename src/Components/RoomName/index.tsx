import { ChangeEventHandler, MouseEventHandler } from "react";

export type RoomNameProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

function RoomName({ onChange, onClick, disabled }: RoomNameProps): JSX.Element {
  return (
    <>
      ルーム名
      <input onChange={onChange} />
      <button onClick={onClick} disabled={disabled}>
        Create Room
      </button>
    </>
  );
}

export default RoomName;
