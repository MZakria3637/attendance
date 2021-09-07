import React from "react"
import SignIn from "./components/SignIn";
import Check from "./components/Check";
import AttendTable from "./components/AttendTable";
import SignUp from "./components/SignUp"
import Popup from "./components/Popup";
//import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    // <Tasks />
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/check/:userId">
          <Check />
        </Route>
        <Route exact path="/attendance">
          <AttendTable />
        </Route>
        <Route exact path="/attendance/tasks">
          <Popup/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
