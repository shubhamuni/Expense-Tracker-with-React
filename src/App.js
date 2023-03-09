import { useContext } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import AuthForm from "./Authentication/AuthForm";
import ExpensePage from "./Components/Expense/ExpensePage";
import Layout from "./Components/Layout/Layout";
import WelcomePage from "./Components/Layout/WelcomePage";
import CompleteProfile from "./Components/Profile/CompleteProfile";
import { Profile } from "./Components/Profile/Profile";
import authContext from "./Store/AuthContext";

function App() {
  const authCtx = useContext(authContext);
  return (
    <Layout>
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
          <Route path="/completeprofile" exact>
            {authCtx.isLoggedIn && <CompleteProfile />}
          </Route>
          <Route path="/profile">{authCtx.isLoggedIn && <Profile />}</Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
