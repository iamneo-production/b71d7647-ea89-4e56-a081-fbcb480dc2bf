import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [RepeatPassword, setRepeatPassword] = useState("");
  const [Emailaddress, setEmailaddress] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    
    const isValid = validateForm();
    
    e.preventDefault();
    try{
      const data = {
        email: Emailaddress,
        name: username,
        password: password,
        rpassword: RepeatPassword,
        phone: MobileNumber,
      };
      const responce=await axios.post('http://localhost:8181/api/v1/auth/register',data);
      console.log(responce);
      if(responce.status===200){
        navigate('/');
        
      }
    }
    catch(error){
      console.error("Error: " ,error);
    }
    if (isValid) {
      const data = {
        email: Emailaddress,
        name: username,
        password: password,
        rpassword: RepeatPassword,
        phone: MobileNumber,
      };
    }
    
     
  };


  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (username.trim() === "") {
      errors.username = "Username is required";
      isValid = false;
    }

    if (password.trim() === "") {
      errors.password = "Password is required";
      isValid = false;
    } else if (!isValidPassword(password)) {
      errors.password = "Invalid format";
      isValid = false;
    }

    if (RepeatPassword.trim() === "") {
      errors.RepeatPassword = "Repeat password is required";
      isValid = false;
    } else if (password !== RepeatPassword) {
      errors.RepeatPassword = "Passwords do not match";
      isValid = false;
    }

    if (Emailaddress.trim() === "") {
      errors.Emailaddress = "Email address is required";
      isValid = false;
    }

    if (MobileNumber.trim() === "") {
      errors.MobileNumber = "Mobile number is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="login-page">
      <h1 className="t">Advisor hub</h1>
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Name"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
          <input
            type="password"
            value={password}
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
          <input
            type="password"
            value={RepeatPassword}
            placeholder="Repeat password"
            required
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {errors.RepeatPassword && <p>{errors.RepeatPassword}</p>}
          <input
            type="email"
            value={Emailaddress}
            placeholder="Email address"
            required
            onChange={(e) => setEmailaddress(e.target.value)}
          />
          {errors.Emailaddress && <p>{errors.Emailaddress}</p>}
          <input
            type="number"
            value={MobileNumber}
            placeholder="Mobile Number"
            required
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          {errors.MobileNumber && <p>{errors.MobileNumber}</p>}
          <button type="submit">Next</button>
          <p className="message">
            Already registered? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
