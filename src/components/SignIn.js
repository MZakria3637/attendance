import React, { useState } from "react";
import "../App.css";
import "./SignIn.css";
import { Link, useHistory } from "react-router-dom";
function SignIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();
    const handleLogin = () => {
        fetch("https://octalogicx.herokuapp.com/users/auth", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (!result.err) {
                    setEmail("");
                    setPassword("");
                    history.push(`/check/${result.User._id}`);
                }
                else {
                    setError("Wrong Credentials !!!");
                }
            })
    };
    return (
        <div className="center p-5 m-5  border">
            <h3 className="App">Sign In</h3>
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
                    {error&&  <p className="primary">{error}</p>}
                </div>
            </div>

            <input
                className="btn btn-primary"
                type="submit"
                value="Sign In"
                onClick={() => {
                    handleLogin();
                }}
            />
            <Link className="btn btn-secondary mx-2" to="/signup">SignUp</Link>
            <Link className="btn btn-secondary mx-2" to="/attendance">Admin</Link>
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

export default SignIn;
