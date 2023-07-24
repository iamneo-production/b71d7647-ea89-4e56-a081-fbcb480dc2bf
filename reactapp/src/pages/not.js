import React from "react";
import './not.css';
import { useSelector } from "react-redux";
import { selectUser } from "./sample";
import { Link } from "react-router-dom";
function Notif(){
    const user=useSelector(selectUser);
    return(
     <div className="example">
        <h1>Details</h1>
<h4>type: </h4><h3>{user.type}</h3>
<h4>qual:</h4><h3>{user.qual}</h3>
<h4>lan:</h4><h3>{user.lan}</h3>
<h4>loc:</h4><h3>{user.loc}</h3>
<h4>exp:</h4><h3>{user.exp}</h3>  
<br></br>
<br></br>
<button className="b1"><Link to="/q">Edit</Link></button>

<button className="b2"><Link to="/">Confirm</Link></button>
</div>
    );
}
export default Notif;