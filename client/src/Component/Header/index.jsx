import { Link } from "react-router-dom";
import Logo from "../../assets/images/icons8-sell-stock-96.png";
import { Button } from "@mui/material";
import { BsBasket3Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import SearchBox from './SearchBox';
import Navigation from "./Navigation";
import { useContext } from "react";
import MyContext from '../../context/MyContext';

const Header = () => {

  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              {" "}
              <b>New Year's </b> Special Brand Days
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row ">
              <div className="logoWrapper d-flex align-items-center col-sm-2 ">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
                <span class="logoName">Purple Market</span>
              </div>
              
             
              <div className="col-sm-10 d-flex align-items-center part2">
                  
                 <SearchBox/>
        

                <div className="part3 d-flex align-items-center ml-auto">

                    <div className="position-relative  d-flex align-items-center">
                      
                     <Button className="cartTab mr-3 "><BsBasket3Fill /></Button>
                      <span className="count d-flex align-items-center   justify-content-center">1</span>
                    </div>
                
                     {context.isLogin===true ? <Link to="/signIn"> <Button className="btn-purple btn-lg btn-round btn-big w-100 mt-3 mb-2 ml-4 ">Sign In</Button>
                    </Link> : <Button className="circle ml-2"><FaUser /></Button>}
                     
                    


                </div>


              </div>
            </div>
          </div>
        </header>

        <Navigation/>
           
      </div>
    </>
  );
};

export default Header;
