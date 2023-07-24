import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './login.css';
import axios from "axios";

function Login() {
  const [Emailaddress, setEmailaddress] = useState("");
  const [password, setPassword] = useState("");
  const [EmailaddressError, setEmailaddressError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleEmailaddressChange = (e) => {
    setEmailaddress(e.target.value);
    setEmailaddressError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setEmailaddressError("");
    setPasswordError("");

    let isValid = true;

    // if (username.trim() === "") {
    //   setUsernameError("Username is required");
    //   isValid = false;
    // }

    // if (password.trim() === "") {
    //   setPasswordError("Password is required");
    //   isValid = false;
    // } else if (!isValidPassword(password)) {
    //   setPasswordError("Invalid format");
    //   isValid = false;
    // }

    console.log(password);
    
    
      try{
        const response=await axios.post(
          "http://localhost:8181/api/v1/auth/authenticate",
          {
            email:Emailaddress,
            password:password
          }
          ).then((response)=>{
            console.log(response.data);
            localStorage.setItem('token',response.data.token);
            console.log(localStorage.getItem('token'));
          })
          
          window.alert("Sucessfully Logged In");
          
          
          
          // dispatch({type:"LOGIN",payload:user});
          navigate("/home");
        }catch(error){
          console.log(error);
          window.alert("Invalid Credentials");
        
      }
    };
  // const isValidPassword = (password) => {
  //   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/;
  //   return passwordRegex.test(password);
  // };

  return (
    <div className="login-page">
      <h1 className="t">Advisor hub</h1>
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            required
            onChange={handleEmailaddressChange}
            value={Emailaddress}
          />
          {EmailaddressError && <p>{EmailaddressError}</p>}
          <input
            type="password"
            placeholder="Password"
            required
            onChange={handlePasswordChange}
            value={password}
          />
          {passwordError && <p>{passwordError}</p>}
          <button type="submit">LogIn</button>
          <p className="message">
            Create new Account <Link to="/account">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
