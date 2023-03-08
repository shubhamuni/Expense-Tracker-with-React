import { Fragment, useContext } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import AuthForm from "./Authentication/AuthForm";
import ExpensePage from "./Components/Expense/ExpensePage";
import Header from "./Components/Layout/Header";
import WelcomePage from "./Components/Layout/WelcomePage";
import authContext from "./Store/AuthContext";

function App() {
  const authCtx = useContext(authContext);
  return (
    <Header>
      <main>
        <Switch>
          <Route path="/">
            {!authCtx.isLoggedIn && <WelcomePage />}
            {authCtx.isLoggedIn && <ExpensePage />}
          </Route>
          <Route path="/authForm" exact>
            {!authCtx.isLoggedIn && <AuthForm />}
          </Route>
          <Route path="/expensepage" exact>
            {authCtx.isLoggedIn && <ExpensePage />}
          </Route>
        </Switch>
      </main>
    </Header>
  );
}

export default App;
