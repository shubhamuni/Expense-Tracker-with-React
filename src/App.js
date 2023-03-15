import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import "./App.css";
import AuthForm from "./Authentication/AuthForm";
import ResetPassword from "./Authentication/ResetPassword";
import DisplayExpense from "./Components/Expense/DisplayExpense";
import Layout from "./Components/Layout/Layout";
import WelcomePage from "./Components/Layout/WelcomePage";
import CompleteProfile from "./Components/Profile/CompleteProfile";
import { Profile } from "./Components/Profile/Profile";

function App() {
  const isToken = useSelector((state) => state.token.token);
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/authform" exact>
            {!isToken && <AuthForm />}
          </Route>
          <Route path="/resetpassword">{!isToken && <ResetPassword />}</Route>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/expensepage">{isToken && <DisplayExpense />}</Route>
          <Route path="/completeprofile" exact>
            {isToken && <CompleteProfile />}
          </Route>
          <Route path="/profile">{isToken && <Profile />}</Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
