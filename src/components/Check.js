import React, { useState, useEffect } from 'react'
import "./check.css"
import { useParams } from 'react-router-dom'
//import InternTasksList from './InternTasksList';
// import InternTAsks from './InternTAsks'

function Check() {
    const [msgError, setMsgError] = useState(false);
    let { userId } = useParams();
    useEffect(() => {
        fetch(`https://octalogicx.herokuapp.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                if (data.err) {
                    setMsgError(data.err)
                }
            })
    }, [userId])
    const [chkIn, setChkIn] = useState({
        time: "",
        err: ""
    });
    const [chkOut, setChkOut] = useState({
        time: "",
        err: ""
    });
    const [task, setTask] = useState("");
    const [IsCheckOut, setIsCheckOut] = useState(false);

    const handleSubmit = (e) => {

        fetch("https://octalogicx.herokuapp.com/check/task", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }, body: JSON.stringify({ description: task, userId: userId })
        }).then((res) => res.json())
            .then((result) => {
                // console.log(result);
            })
        setIsCheckOut(false);

    }
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
    useEffect(() => {
        if (chkOut.time) {
            setIsCheckOut(true);
        }

    }, [chkOut])
    useEffect(() => {
        if (chkIn.time) {
            setIsCheckOut(false);
        }

    }, [chkIn])
    useEffect(() => {

    })
    // console.log(task);
    return (
        <>{msgError ? (<div className="error">{msgError}</div>) : (
            <div className="row1 m-5">
                <div className="col1">
                    <p>{chkIn.time ? chkIn.time : chkIn.err}</p>
                    <button type="button" className={`btn btn-success btn-lg ${chkIn}`} onClick={CheckIn}>CHECK IN</button>

                </div>
                <div className="col2">
                    <p>{chkOut.time ? chkOut.time : chkOut.err}</p>
                    <button type="button" className="btn btn-danger btn-lg" onClick={CheckOut}>CHECK OUT</button><br />
                    {IsCheckOut && <form className=" p-5 " style={{ display: 'inline-block' }}>
                        <div class="form-group ">
                            <label for="exampleFormControlTextarea1">Today's Work </label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" cols="50" onChange={(e) => {
                                setTask(e.target.value);
                            }}></textarea>
                        </div>
                        <button class="btn btn-primary mt-2" onClick={(e) => { handleSubmit(e); }}>Submit</button>
                    </form>
                    }
                </div>

            </div>)
        }
            {/* <InternTAsks /> */}
            {/* {IsCheckOut && <form className=" p-5 " style={{display:'inline-block'}}>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Today's Work </label>
                    <textarea class="form-control"  id="exampleFormControlTextarea1" rows="3"  onChange={(e) => {
                        setTask(e.target.value);
                    }}></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-2" onSubmit={(e)=>{handleSubmit(e);}}>Submit</button>
            </form>
            } */}

        </>
    )
}

export default Check
