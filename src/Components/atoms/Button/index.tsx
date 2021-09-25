import { MouseEventHandler } from "react";

export type ButtonProps = {
  children: JSX.Element | string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
};

function Button({
  children,
  disabled,
  onClick,
  type,
}: ButtonProps): JSX.Element {
  return (
    <button disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
