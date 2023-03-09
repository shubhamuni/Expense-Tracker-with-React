import { useContext } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import AuthForm from "./Authentication/AuthForm";
import ExpensePage from "./Components/Expense/ExpensePage";
import Header from "./Components/Layout/Header";
import WelcomePage from "./Components/Layout/WelcomePage";
import { Profile } from "./Components/Profile/Profile";
import authContext from "./Store/AuthContext";

function App() {
  const authCtx = useContext(authContext);
  return (
    <Header>
      <main>
        <Switch>
          <Route path="/authform" exact>
            {!authCtx.isLoggedIn && <AuthForm />}
          </Route>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/expensepage">
            {authCtx.isLoggedIn && <ExpensePage />}
          </Route>
          <Route path="/profile">{authCtx.isLoggedIn && <Profile />}</Route>
        </Switch>
      </main>
    </Header>
  );
}

export default App;
