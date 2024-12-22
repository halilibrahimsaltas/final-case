import { useEffect, useContext } from "react";
import MyContext from "./../../context/MyContext";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignIn = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
    return () => {
      context.setIsHeaderFooterShow(false);
    };
  }, [context]);

  const signIn = (e) => {
    e.preventDefault(formFields);

    if (
      formFields.name == "" &&
      formFields.email == "" &&
      formFields.password == ""
    ) {
      setError(true);
      return false;
    } else {
      postData("/api/user/signup", formFields).then((res) => {
        setError(false);
        setSuccess(true);
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
