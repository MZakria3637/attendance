import React from 'react'
import {  useHistory } from "react-router-dom";
function Logout() {
    const history1 = useHistory();
    return (
        <div>
            <i class="fas fa-power-off fa-4x pointer float-end me-5 text-info " onClick={()=>{
                history1.push("/");
                
            }}></i>
        </div>
    )
}

export default Logout
