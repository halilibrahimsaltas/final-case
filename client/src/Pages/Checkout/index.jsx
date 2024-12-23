import React, { useContext, useState } from "react";
import { Button } from "@mui/material"; 
import { BsReceipt } from "react-icons/bs"; 
import { useLocation } from "react-router-dom";
import MyContext from "../../context/MyContext";

const Checkout = () => {
 const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;

  const[formFields, setFormFields]=useState({
     number:"",
     name:"",
     cardId:"",
     adress:""

  })

const  onChangeInput=(e)=>{
    setFormFields(()=>({
        ...formFields,
        [e.target.name]:e.target.value
    }))

}
const context =useContext(MyContext);


const checkout =(e)=>{
    e.preventDefault();
    console.log(formFields);

}


  return (
    <div className="content w-100 d-flex justify-content-center align-items-start" style={{ minHeight: "100vh" }}>
      <div className="row w-100" style={{ maxWidth: "1200px" }}>
        {/* Left Form Section */}
        <div className="col-md-8">
          <div className="card shadow border-0 p-3 mb-4">
            <h3>Billing Details</h3>
          </div>

          <form className="form" onSubmit={checkout}>
            <div className="card p-4 shadow">
              <h5 className="mb-4">Billing Information</h5>

              <div className="form-group mt-3">
                <h6>INVOICE NUMBER</h6>
                <input type="text" name="number" className="form-control " onChange={onChangeInput}/>
              </div>
              <div className="form-group mt-3">
                <h6>USER ID</h6>
                <input type="text" name="name" className="form-control" onChange={onChangeInput} />
              </div>
              <div className="form-group mt-3">
                <h6>CARD ID</h6>
                <input type="text" name="cardId" className="form-control" onChange={onChangeInput} />
              </div>
              <div className="form-group mt-3">
                <h6>ADDRESS</h6>
                <input type="text" name="address" className="form-control" onChange={onChangeInput} />
              </div>

              <br />
              <Button type="submit" className="btn-purple btn-lg btn-big w-100">
                <BsReceipt /> &nbsp; SAVE AND CONTINUE
              </Button>
            </div>
          </form>
        </div>

        {/* Right Cart Totals Section */}
        <div className="col-md-4">
          <div className="card border p-3 shadow">
            <h4>CART TOTALS</h4>
            <div className="d-flex align-items-center mb-3">
              <span>Subtotal</span>
              <span className="ml-auto text-red font-weight-bold">
              ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <span>Shipping</span>
              <span className="ml-auto">
                <b>Free</b>
              </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <span>Total</span>
              <span className="ml-auto text-red font-weight-bold">
              ${totalPrice.toFixed(2)}
              </span>
            </div>
            <br />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;