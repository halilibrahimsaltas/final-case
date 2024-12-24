import React, { useState } from "react";
import { Button } from "@mui/material";
import { BsReceipt } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    number: "",
    name: "",
    cardId: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // Track payment status

  const onChangeInput = (e) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setPaymentStatus("Processing...");

    // Simulate a delay (e.g., 3 seconds) before setting the payment status
    setTimeout(() => {
      setPaymentStatus("Payment Completed!");
      setIsSubmitting(false);
      navigate("/"); 
    }, 3000); 
     // Simulating a 3-second payment processing time

  };

  return (
    <div className="content w-100 d-flex justify-content-center align-items-start" style={{ minHeight: "100vh" }}>
      <div className="row w-100" style={{ maxWidth: "1200px" }}>
        {/* Left Form Section */}
        <div className="col-md-8">
          <div className="card shadow border-0 p-3 mb-4">
            <h3>Billing Details</h3>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="card p-4 shadow">
              <h5 className="mb-4">Billing Information</h5>

              {/* Dynamically rendered form fields */}
              {Object.keys(formFields).map((key) => (
                <div className="form-group mt-3" key={key}>
                  <h6>{key.toUpperCase()}</h6>
                  <input
                    type="text"
                    name={key}
                    className="form-control"
                    value={formFields[key]}
                    onChange={onChangeInput}
                  />
                </div>
              ))}

              <br />
              <Button type="submit" className="btn-purple btn-lg btn-big w-100" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : <><BsReceipt /> &nbsp; SAVE AND CONTINUE</>}
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

      {/* Payment Status Modal/Pop-up */}
      {paymentStatus && (
        <div className="payment-status-popup">
          <div className="popup-content">
            <h3>{paymentStatus}</h3>
            {paymentStatus === "Processing..." && <p>Please wait...</p>}
            {paymentStatus === "Payment Completed!" && <p>Your payment was successful.</p>}
            {paymentStatus === "Payment failed. Please try again." && <p>Something went wrong with your payment. Please try again later.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
