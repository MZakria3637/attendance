import React, { useState, useEffect } from "react";
function AttendTable() {
    const [Attendees, setAttendees] = useState([]);
    useEffect(() => {
        fetch(
            "https://octalogicx.herokuapp.com/attendances"
        ).then((res) => res.json())
            .then((result) => {
                setAttendees(result);
            })

    }, []);
    console.log(Attendees);
    return (
        <div className="limiter">
            <div className="container-table100">
                <div className="wrap-table100">
                    <div className="table100">
                        <table>
                            <thead>
                                <tr className="table100-head" id="">
                                    <th className="column1">Name</th>
                                    <th className="column2">Date</th>
                                    <th className="column3">Check In</th>
                                    <th className="column4">Check Out</th>
                                    <th className="column5">Total</th>
                                    <th className="column6">Tasks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Attendees.map((Attendee, index) => {
                                    return (
                                        <tr key={index} id={Attendee.userId}>
                                            <td className="column1">{Attendee.userName}</td>
                                            <td className="column2">{Attendee.currentDate}</td>
                                            <td className="column3">{Attendee.lastChkIn}</td>
                                            <td className="column4">{Attendee.lastChkOut}</td>
                                            <td className="column5">{Attendee.totalTime} Hrs</td>
                                            <td className="column6"><button className="btn btn-primary">Show Details</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AttendTable;
