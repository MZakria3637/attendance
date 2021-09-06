import React, { useState } from 'react'
import "./check.css"
import { useParams } from 'react-router-dom'
function Check() {
    const [chkIn, setChkIn] = useState({
        time: "",
        err: ""
    });
    const [chkOut, setChkOut] = useState({
        time: "",
        err: ""
    });
    let { userId } = useParams();
    const CheckIn = () => {
        fetch("https://octalogicx.herokuapp.com/check/in", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: userId }),
        })
            .then((res) => res.json())
            .then((result) => {
                setChkIn({ ...chkIn, err: result.err ? result.err : "", time: result.time ? result.time : "" });
            })
    }
    const CheckOut = () => {
        fetch("https://octalogicx.herokuapp.com/check/out", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: userId }),
        })
            .then((res) => res.json())
            .then((result) => {
                setChkOut({ ...chkOut, err: result.err ? result.err : "", time: result.time ? result.time : "" });
            })
    }
    return (
        <div className="row1 m-5">
            <div className="col1">
                <p>{chkIn.time ? chkIn.time : chkIn.err}</p>
                <button type="button" className={`btn btn-success btn-lg ${chkIn}`} onClick={CheckIn}>CHECK IN</button>
            </div>
            <div className="col2">
                <p>{chkOut.time ? chkOut.time : chkOut.err}</p>
                <button type="button" className="btn btn-danger btn-lg" onClick={CheckOut}>CHECK OUT</button>
            </div>
        </div>
    )
}

export default Check
