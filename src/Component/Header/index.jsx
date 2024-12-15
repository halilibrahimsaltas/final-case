import { Link } from "react-router-dom";
import Logo from "../../assets/images/icons8-sell-stock-96.png";
import { IoSearch } from "react-icons/io5";
import { Button } from "@mui/material";
import { BsBasket3Fill } from "react-icons/bs";

const Header = () => {
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
            <div className="row align-items-center">
              <div className="logoWrapper d-flex align-items-center col-sm-2 ">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                <div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Seach for products..." />
                  <Button>
                    <IoSearch />
                  </Button>
                </div>

                <div className="part3 d-flex align-items-center">
                    <Button><BsBasket3Fill /></Button>
                </div>


              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
