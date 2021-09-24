import React, { useState } from "react";

function Chat(): JSX.Element {
  const [test, stest] = useState("");
  const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
    stest(event.target.value);
  };
  return (
    <div>
      <input
        onChange={(e) => {
          handle(e);
        }}
      />
      {test}
    </div>
  );
}

export default Chat;
