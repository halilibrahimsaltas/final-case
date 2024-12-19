import { useEffect, useContext } from "react";
import MyContext from './../../context/MyContext';
import TextField from '@mui/material/TextField';
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

  
  return (
    <section className="section signIn mt-5 ">
    <div className="container">
      <div className="row">
        <div className=" col-md-12">
          <form>
            <h2 className="hd">Sign In</h2>
            <div className="form-group">
              <TextField id="standard-basic" label="Email address" type="email"  required variant="standard"  className="w-100"/>
            </div>
            <div className="form-group">
              <TextField id="standard-basic" label="Password" type="password" required variant="standard" className="w-100" />
            </div>
            <Button className="btn-purple btn-lg btn-big w-100 mt-3 mb-2">Sign In</Button>
            <p>Not Registered ?  <Link to="/signUp" className="border-effect font-weight-bold ">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default SignIn;


