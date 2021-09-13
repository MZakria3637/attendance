import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { Link } from "react-router-dom";
function AttendTable() {
    
    const [Attendees, setAttendees] = useState([]);
    const [Dat, setDate] = useState("");
    const [id, setID] = useState("");
    const [modal, setModal] = useState(false);
    const history = useHistory();
    console.log(Dat)
    const toggle = () => {
        setModal(!modal);
    }
    useEffect(() => {
        let date=new Date();
        console.log(date)
        fetch(
            `https://octalogicx.herokuapp.com/attendances/byDate/${date}`
        ).then((res) => res.json())
            .then((result) => {
                setAttendees(result);
                console.log(result)
            })
    }, []);

    useEffect(() => {
        fetch(
            `https://octalogicx.herokuapp.com/attendances/byDate/${Dat}`
        ).then((res) => res.json())
            .then((result) => {
                console.log(result);
                setAttendees(result);
            })
    }, [Dat])
    useEffect(() => {
        setModal((m) => {
            if (id !== "") {
                return true;
            }
            else {
                return false;
            }
        });


    }, [id])

    return (<>
        <div className="limiter">
            <div className="container-table100">
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Select</ModalHeader>
                    <ModalBody>
                        <Button onClick={()=>{ history.push(`/attendance/week/${id}`)}} className="btn btn-secondary mx-2 btn-dark" >Order By Week</Button>
                        <Button onClick={()=>{ history.push(`/attendance/month/${id}`)}} className="btn float-end mr-2 btn-dark ">Order By Month</Button>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>


                </Modal>
                <label className="font-weight-bold">Order By Date</label>
                <input type="date" className="p-1 m-2" style={{ borderRadius: 3 }} data-date-format="dd/mm/yyyy" onChange={(e) => { setDate(new Date(e.target.value)) }} />
                <label className="font-weight-bold">Order By Name</label>
                <select className="form-select w-25 m-2" aria-label="Default select example" onChange={(e) => { setID(e.target.value) }}>
                    <option defaultValue >Select Name</option>
                    <option value="">None</option>
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
                                {
                                    Attendees.map((Attendee, index) => {
                                        return (
                                            <tr key={index} id={Attendee.userId}>
                                                <td className="column1">{Attendee.userName}</td>
                                                <td className="column2">{Attendee.currentDate}</td>
                                                <td className="column3">{Attendee.lastChkIn}</td>
                                                <td className="column2">{Attendee.lastChkOut}</td>
                                                <td className="column5">{Attendee.presence ? "Present" : "Absent"}</td>
                                                <td className="column5">{Attendee.totalTime} Hrs</td>
                                                <td className="column6">
                                                    <p className="p-2">{Attendee.description}

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
