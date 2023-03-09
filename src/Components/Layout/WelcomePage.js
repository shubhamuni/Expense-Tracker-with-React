import { useContext } from "react";
import authContext from "../../Store/AuthContext";
import classes from "./WelcomePage.module.css";

const WelcomePage = () => {
  const authCtx = useContext(authContext);
  return (
    <div className={classes.title}>
      <h1>Welcome to My Expense Tracker</h1>
      {!authCtx.isLoggedIn && <h2>Please Login or Create Account</h2>}
    </div>
  );
};

export default WelcomePage;
