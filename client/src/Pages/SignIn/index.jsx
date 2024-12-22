import { useEffect, useContext, useState } from "react";
import MyContext from "./../../context/MyContext";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/api";
import Cookies from "js-cookie";

const SignIn = () => {
  const [error_, setError] = useState(false);
  const [success_, setSuccess] = useState(false);
  const context = useContext(MyContext);
  const history = useNavigate();

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
    return () => {
      context.setIsHeaderFooterShow(false);
    };
  }, [context]);

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const onChangeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const signIn = (e) => {
    e.preventDefault(formFields);

    if (formFields.email == "" && formFields.password == "") {
      setError(true);
      return false;
    } else {
      postData("/api/user/signin", formFields).then((res) => {
        try {
          localStorage.setItem("token", res.token);


          localStorage.setItem("user", {
            name: res.user?.name,
            email: res.user?.email,
            userId: res.user?.id,
          });

          setError(false);
          setSuccess(true);
          setTimeout(() => {
            history("/dashboard");
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      });
    }
  };

  return (
    <section className="section signIn mt-5 ">
      <div className="container">
        <div className="row">
          <div className=" col-md-12">
            <form onSubmit={signIn}>
              <h2 className="hd">Sign In</h2>
              {error_ === true && (
                <p className="text-danger">Please fill all the fields</p>
              )}
              {success_ === true && (
                <p className="text-success">Successfully !</p>
              )}
              <div className="form-group">
                <TextField
                  label="Email address"
                  type="email"
                  required
                  variant="standard"
                  className="w-100"
                  name="email"
                  onChange={onChangeInput}
                />
              </div>
              <div className="form-group">
                <TextField
                  label="Password"
                  type="password"
                  required
                  variant="standard"
                  className="w-100"
                  name="password"
                  onChange={onChangeInput}
                />
              </div>
              <Button
                type="submit"
                className="btn-purple btn-lg btn-big w-100 mt-3 mb-2"
              >
                Sign In
              </Button>
              <p>
                Not Registered ?{" "}
                <Link to="/signUp" className="border-effect font-weight-bold ">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
