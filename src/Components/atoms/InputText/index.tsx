import { ChangeEventHandler } from "react";

export type InputProps = {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

function Input({ onChange }: InputProps): JSX.Element {
  return <input onChange={onChange} />;
}

export default Input;
