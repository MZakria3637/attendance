import React, { useState} from "react";
import "../App.css";
import "./SignIn.css";
import { useHistory } from "react-router-dom";
function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = () => {
     fetch("https://octalogicx.herokuapp.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, password: password }),
    })
      .then((res) => res.json())
      .then((result) => {
        setName("");
        setEmail("");
        setPassword("");
        history.push(`/check/${result._id}`)
      })
  };
  return (
    <div className="center p-5 m-5  border">
      <h3 className="App">Sign Up</h3>
      <div class="mb-3 row">
        <label for="staticName" class="form-label">
          Name
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            autoFocus
            required
            class="form-control
                      "
            id="staticName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="staticEmail" class="form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            autoFocus
            required
            class="form-control
                      "
            id="staticEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control "
            id="inputPassword"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <input
        class="btn btn-primary"
        type="submit"
        value="Sign Up"
        onClick={() => {
          handleLogin();
        }}
      />
      {/* {data && (
        <Router>
          <Route
            exact
            path="/checkIn-checkOut"
            component={(data) => {
              <Check data={data} />;
            }}
          />
        </Router>
      )} */}
    </div>
  );
}

export default SignUp;
