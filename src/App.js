import React from "react"
import SignIn from "./components/SignIn";
import Check from "./components/Check";
import AttendTable from "./components/AttendTable";
import SignUp from "./components/SignUp"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [Error, setError] = useState("");
  // const [hasAccount, setHasAccount] = useState(false);

  // const clearUsers = () => {
  //   setPassword("");
  //   setEmail("")
  // }
  // const clearErrors = () => {
  //   setEmailError("");
  //   setPasswordError("")
  // }
  // const handleLogin = () => {
  //   clearErrors();
  //   fire.auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch(err => {
  //       switch (err.code) {
  //         case "auth/invalid-email":
  //         case "auth/user-disabled":
  //         case "auth/user-not-found":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/wrong-password":
  //           setPasswordError(err.message);
  //           break;
  //       }
  //     })
  // }
  // const handleSignUp = () => {
  //   clearErrors();
  //   fire.auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch(err => {
  //       switch (err.code) {
  //         case "auth/invalid-email":
  //         case "auth/email-already-in-use":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(err.message);
  //           break;
  //       }
  //     })

  // }
  // const handleLogOut = () => {
  //   fire.auth().signOut();
  // }
  // const authListener = () => {
  //   fire.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       clearUsers();
  //       setUser(user);
  //     }
  //     else {
  //       setUser("");
  //     }
  //   })
  // }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/check/:userId">
          <Check />
        </Route>
        <Route path="/attendance">
          <AttendTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
