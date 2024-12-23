import React, { useState, useEffect } from "react";
import Sidebar from "../../Component/Dashboard/Sidebar";
import { Button, TextField } from "@mui/material";
import { newEditData } from "../../utils/api";
import { useParams, useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [error_, setError] = useState(false);
  const [success_, setSuccess] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    userId: ""
  });
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the stored user data from localStorage (if any)
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
        console.log("Parsed User Data:", parsedUserData);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, []);

  const formdata = new FormData();

  // Handle input changes to update state
  const onChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const editUser = (e) => {
    e.preventDefault();

    if (userData.email === "" || userData.password === "" || userData.name === "") {
      setError(true);
      return;
    } else {
      newEditData(`/api/user/${userData?.userId}`, userData)
        .then((res) => {
          console.log("API Response:", res);

          try {
            if (res.result?.error) {
              setError(true);
            } else {
              localStorage.setItem("token", res.token);

              // result içindeki user bilgisine erişim
              const user = {
                name: res.result?.name,
                email: res.result?.email,
                userId: res.result?.id || res.result?._id,
              };

              localStorage.setItem("userData", JSON.stringify(user));
              const storedUser = JSON.parse(localStorage.getItem("userData"));
              console.log("Stored User:", storedUser);
              setError(false);
              setSuccess(true);
              setTimeout(() => {
                navigate("/dashboard");
              }, 500);
              setTimeout(() => {
                window.location.reload();
              }, 500);
            }
          } catch (error) {
            console.log("Error signing in:", error);
          }
        })
        .catch((error) => {
          console.error("Error signing in:", error);
          setError(true);
        });
    }
  };

  return (
    <div className="main d-flex mt-4">
      <div className="sidebarWrapper">
        <Sidebar />
      </div>

      <div className="content w-100">
        <div className="card shadow border-0 p-3 mt-4">
          <h3>Account Details</h3>
          <div
            className="content w-100 d-flex justify-content-center align-items-start"
            style={{ minHeight: "100vh", marginLeft: "300px" }}
          >
            <div className="row w-100" style={{ maxWidth: "1200px" }}>
              {/* Left Sidebar Section */}
              <div className="col-md-8">
                <div className="card shadow border-0 p-3 mb-4">
                  <h3>Edit Account Information</h3>
                </div>

                {/* User Info Form */}
                <form onSubmit={editUser}>
                  {error_ && <p className="text-danger">Please fill all the fields</p>}
                  {success_ && <p className="text-success">Successfully updated!</p>}
                  <div className="card p-4 shadow">
                    <h5 className="mb-4">Edit Your Information</h5>

                    {/* Name Field */}
                    <div className="form-group mt-3">
                      <TextField
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={userData.name}
                        onChange={onChangeInput}
                        fullWidth
                      />
                    </div>

                    {/* Email Field */}
                    <div className="form-group mt-3">
                      <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={userData.email}
                        onChange={onChangeInput}
                        fullWidth
                      />
                    </div>

                    {/* Password Field */}
                    <div className="form-group mt-3">
                      <TextField
                        label="Password"
                        variant="outlined"
                        name="password"
                        value={userData.password || ""}
                        onChange={onChangeInput}
                        fullWidth
                      />
                    </div>

                    {/* Save Button */}
                    <Button
                      type="submit"
                      className="btn-purple btn-lg btn-big w-100 mt-4"
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </div>

              {/* Right Profile Section (Optional) */}
              <div className="col-md-4">
                <div className="card p-3 shadow">
                  <h4>Profile Summary</h4>
                  <div className="d-flex flex-column mb-3">
                    <span>
                      <b>Name:</b> {userData.name}
                    </span>
                    <span>
                      <b>Email:</b> {userData.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;