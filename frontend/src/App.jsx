import { Route, Switch } from "wouter";
import "./App.css";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route>Not Found</Route>
      </Switch>
    </>
  );
};

export default App;
