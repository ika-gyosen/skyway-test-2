import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./Pages/404";
import ChatRoom from "./Pages/chatroom";
import Top from "./Pages/top";

const Container: FC = () => (
  <Switch>
    <Route exact={true} path="/">
      <Top />
    </Route>
    <Route exact={true} path="/chatroom">
      <ChatRoom />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Container;
