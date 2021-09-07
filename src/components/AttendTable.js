import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
function AttendTable() {
    const [Attendees, setAttendees] = useState([]);
    const [Dat, setDate] = useState("");
    useEffect(() => {

        fetch(
            "https://octalogicx.herokuapp.com/attendances"
        ).then((res) => res.json())
            .then((result) => {
                setAttendees(result);
            })
    }, []);

    useEffect(() => {
        fetch(
            `https://octalogicx.herokuapp.com/attendances/${Dat}`
        ).then((res) => res.json())
            .then((result) => {
                setAttendees(result);
            })
    }, [Dat])

    return (<>
        <div className="limiter">
            <div className="container-table100">
                <input type="date" className="p-1" style={{ borderRadius: 3 }} data-date-format="dd/mm/yyyy" onChange={(e) => { setDate(new Date(e.target.value)) }} />
                <div className="wrap-table100">
                    <div className="table100">
                        <table>
                            <thead>
                                <tr className="table100-head" id="">
                                    <th className="column1">Name</th>
                                    <th className="column2">Date</th>
                                    <th className="column3">Check In</th>
                                    <th className="column2">Check Out</th>
                                    <th className="column5">Presence</th>
                                    <th className="column5">Total</th>
                                    <th className="column6">Today's Work</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Attendees.map((Attendee, index) => {
                                    return (
                                        <tr key={index} id={Attendee.userId}>
                                            <td className="column1">{Attendee.userName}</td>
                                            <td className="column2">{Attendee.currentDate}</td>
                                            <td className="column3">{Attendee.lastChkIn}</td>
                                            <td className="column2">{Attendee.lastChkOut}</td>
                                            <td className="column5">{Attendee.presence ? "Present" : "Absent"}</td>
                                            <td className="column5">{Attendee.totalTime} Hrs</td>
                                            <td className="column6">
                                                <p className="p-2">hello i made a website today hrfghjbf  hgdshf grsf rwhne f

                                                </p>
                                                {/* <Link className="btn btn-primary" to="/attendance/tasks">Show Details</Link> */}
                                            </td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default AttendTable;
