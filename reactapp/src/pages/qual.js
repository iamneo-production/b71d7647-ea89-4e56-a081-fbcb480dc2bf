import React from "react";
import './register.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { signup } from "./sample";
function Qualifiaction() {
  const navigate = useNavigate()
  const dispatch=useDispatch();
  const [type,setType]=useState("");
  const [qual,setQual]=useState("");
  const [lan,setLan]=useState("");
  const [loc,setLoc]=useState("");
  const [exp,setExp]=useState("");


  dispatch(signup({type:type,qual:qual,lan:lan,loc:loc,exp:exp}))
  const handleSubmit=(e)=>{ 
      e.preventDefault();
      navigate("/not")
    }
      return (
        <div className="login-page">
        <div className="form">
        
          <form className="login-form">
            <input type="select" placeholder="Type"  onChange={(e)=>setType(e.target.value)}/>
            <input type="text" placeholder="Qualifiaction" onChange={(e)=>setQual(e.target.value)}/>
            <input type="text" placeholder="Language" onChange={(e)=>setLan(e.target.value)}/>
            <input type="text" placeholder="Location" onChange={(e)=>setLoc(e.target.value)}/>
            <input type="text" placeholder="Experience" onChange={(e)=>setExp(e.target.value)}/>
           
            <button onClick={handleSubmit}>Register</button>
           
          </form>
        </div>
      </div>
      );
    }
  
    export default Qualifiaction;