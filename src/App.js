import React from "react"
import SignIn from "./components/SignIn";
import Check from "./components/Check";
import AttendTable from "./components/AttendTable";
import SignUp from "./components/SignUp"
//import Popup from "./components/Popup";
//import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ByMonth from "./components/ByMonth";
import ByWeek from "./components/ByWeek";
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
        <Route exact path="/attendance/month/:id">
          <ByMonth/>
        </Route>
        <Route exact path="/attendance/week/:id">
          <ByWeek/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
