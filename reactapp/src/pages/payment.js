import React from "react";
import './payment.css';
import { useNavigate} from "react-router";
function Payment(){
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
  e.preventDefault();
  navigate("/not");
  }
    return (

        <div className="contain">
          <div>
            <h2 >Confirm order and pay</h2>
            <span>please make the payment, after that you can enjoy all the features and benefits.</span>
          </div>
          <div  style={{display:'flex'}}>
            <div>
              <div>
                <h6>Payment details</h6>
                
                <br></br>
                <br></br>
                <div>
                
                  <div>
                    <div  >
                    Card Username <input type="text" name="name" className="form-control" required="required" /> 
                    Card Number<input type="text" name="name" className="form-control" required="required" />
                    </div>
                  </div>
                  <br></br>
                <br></br>
                  <div >
                    <div  >
                    Expiry  <input type="text" name="name" className="form-control" required="required" /> 
                    CVV<input type="text" name="name" className="form-control" required="required" />
                    </div>
                  </div>
                </div>
                
                <br></br>
                      <hr></hr>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      
                      
                  <h6>Billing Address</h6>
                <div style={{display:'flex'}}>
                  <div >
                    <div >
                    Street Address <input type="text" name="name" className="form-control" required="required" /> 
                    </div>
                    <br></br>
                    <div>
                    City<input type="text" name="name" className="form-control" required="required" /> 
                    </div>
                    <br></br>
                  </div>
                  <div>
                    <div>
                    State/Province<input type="text" name="name" className="form-control" required="required" /> 
                    </div>
                    <br></br>
                    <div>
                    Zip code  <input type="text" name="name" className="form-control" required="required" /> 
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div  >
                <button className="btn btn-success px-3" onClick={handleSubmit}>Pay</button>
              </div>
            </div>
            <div className="col-md-4">
              
            </div>
          </div>
        </div>
      );
}

export default Payment;