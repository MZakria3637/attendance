import React, { useState } from "react";
import "../App.css";
import "./SignIn.css";
import { Link, useHistory } from "react-router-dom";
//import { useEffect } from "react/cjs/react.development";
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
                // console.log(result);
                if (!result.err) {
                    setEmail("");
                    setPassword("");
                    if (result.message) {
                        history.push(`/attendance`)
                    }
                    else {
                         history.push(`/check/${result.User._id}`);
                    }
                }
                else {
                    setError("Wrong Credentials !!!");
                }
            })
    };
    return (
        <div className="center p-5 m-5  border">
            <h3 className="App">Sign In</h3>
            <div className="mb-3 row">
                <label for="staticEmail" className="form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        autoFocus
                        required
                        className="form-control"

                        id="staticEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input
                        type="password"
                        className="form-control "
                        id="inputPassword"
                        autoFocus
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="primary">{error}</p>}
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
            {/* <Link className="btn btn-secondary mx-2" to="/attendance">Admin</Link> */}


        </div>
    );
}

export default SignIn;
