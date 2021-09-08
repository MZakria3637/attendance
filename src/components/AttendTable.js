import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
function AttendTable() {
    const [Attendees, setAttendees] = useState([]);
    const [Dat, setDate] = useState("");
    const [id, setID] = useState("");
    const [selectedName, setSelectedNAme] = useState({})
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
                setSelectedNAme({});
            })
    }, [Dat])

    useEffect(() => {
        Attendees.map((Attendee) => {
            if (id === Attendee.userId&&id!=="") {
                setSelectedNAme(Attendee);
                
            }
            else if(id==="")
            {
                setSelectedNAme({});
                
            }
            return 2;

        })

    }, [id,Attendees])
    return (<>
        <div className="limiter">
            <div className="container-table100">
                <label className="font-weight-bold">Order By Date</label>
            <input type="date" className="p-1 m-2" style={{ borderRadius: 3 }} data-date-format="dd/mm/yyyy" onChange={(e) => { setDate(new Date(e.target.value)) }} />
            <label className="font-weight-bold">Order By Name</label>
                <select class="form-select w-25 m-2" aria-label="Default select example" onChange={(e) => { setID(e.target.value) }}>
                    <option selected >Select Name</option>
                    <option  value="">None</option>
                    {Attendees.map((Attendee, index) => {
                        return (
                            <option key={index} value={Attendee.userId}>{Attendee.userName}</option>
                        );
                    })}
                </select>
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
                                {selectedName.userId?( <tr  id={selectedName.userId}>
                                            <td className="column1">{selectedName.userName}</td>
                                            <td className="column2">{selectedName.currentDate}</td>
                                            <td className="column3">{selectedName.lastChkIn}</td>
                                            <td className="column2">{selectedName.lastChkOut}</td>
                                            <td className="column5">{selectedName.presence? "Present" : "Absent"}</td>
                                            <td className="column5">{selectedName.totalTime} Hrs</td>
                                            <td className="column6">
                                                <p className="p-2">hello i made a website today hrfghjbf  hgdshf grsf rwhne f

                                                </p>
                                                {/* <Link className="btn btn-primary" to="/attendance/tasks">Show Details</Link> */}
                                            </td>

                                        </tr>):
                                 Attendees.map((Attendee, index) => {
                                    return (
                                        <tr key={index} id={Attendee.userId}>
                                            <td className="column1">{ Attendee.userName}</td>
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
