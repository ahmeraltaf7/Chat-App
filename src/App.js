import { Route, Switch } from "react-router-dom";
import "./styles/output.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
      <Route path="/chat" exact component={Chat} />
    </Switch>
  );
}

export default App;
