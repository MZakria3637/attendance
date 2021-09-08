import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function ByMonth() {
    let { id } = useParams();
    console.log(id);
    const [Attendees, setAttendees] = useState([]);
    useEffect(() => {

        fetch(
            "https://octalogicx.herokuapp.com/attendances"
        ).then((res) => res.json())
            .then((result) => {
                setAttendees(result);
            })
    }, []);

    return (
        <>
            <div className="limiter">
                <div className="container-table100">
                    <div className="px-4 w-25 mb-2">
                        <h3 className="">Name:<span className="px-3 fst-italic" style={{color:"#F5F5F5"}}>Zakria</span></h3>

                    </div>
                    <div className="wrap-table100">
                        <div className="table100">
                            <table>
                                <thead>
                                    <tr className="table100-head" id="">
                                        {/* <th className="column1">Name</th> */}
                                        <th className="column1">Date</th>
                                        <th className="column3">Check In</th>
                                        <th className="column2">Check Out</th>
                                        <th className="column5">Presence</th>
                                        <th className="column5">Total</th>
                                        <th className="column1">Today's Work</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Attendees.map((Attendee, index) => {
                                            return (
                                                <tr key={index} id={Attendee.userId}>
                                                    {/* <td className="column1">{Attendee.userName}</td> */}
                                                    <td className="column1">{Attendee.currentDate}</td>
                                                    <td className="column3">{Attendee.lastChkIn}</td>
                                                    <td className="column2">{Attendee.lastChkOut}</td>
                                                    <td className="column5">{Attendee.presence ? "Present" : "Absent"}</td>
                                                    <td className="column5">{Attendee.totalTime} Hrs</td>
                                                    <td className="column1">
                                                        <p className="p-2">hello i made a website today hrfghjbf  hgdshf grsf rwhne f

                                                        </p>
                                                        {/* <Link className="btn btn-primary" to="/attendance/tasks">Show Details</Link> */}
                                                    </td>

                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </table> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ByMonth
