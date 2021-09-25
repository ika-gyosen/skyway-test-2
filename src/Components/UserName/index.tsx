import styles from "./style.module.scss";

export type UserNameProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function UserName({ onChange }: UserNameProps): JSX.Element {
  return (
    <>
      お名前
      <input onChange={onChange} />
    </>
  );
}

export default UserName;
