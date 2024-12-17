import { Button } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpenSidebar, setisopenSidebarVal] = useState(true);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <div className="catWrapper">
              <Button className="allCatTab align-items-center" onClick={()=>isOpenSidebarNav(!isOpenSidebarVal)}>
                <span className="icon1 mb-1 mr-2">
                  <FiMenu />
                </span>
                <span class="text">ALL CATEGORIES</span>
                <span className="icon2 mb-1 ml-1">
                  <FaAngleDown />
                </span>
              </Button>
              <div className={"sidebarNav ${isOpenSidebarVal===true ? 'open' : ''}"}>
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Fashion</Button>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/">
                      <Button>Electroincs</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Market</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Gift</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Fashion</Button>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/">
                      <Button>Electroincs</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Market</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Gift</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline w-100 ml-auto">
              <li className="list-inline-item ">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Fashion</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Shoes</Button>
                  </Link>
                  <Link to="/">
                    <Button>Personal Care</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>Personal Care</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Electroincs</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Shoes</Button>
                  </Link>
                  <Link to="/">
                    <Button>Personal Care</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>Personal Care</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Market</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Shoes</Button>
                  </Link>
                  <Link to="/">
                    <Button>Personal Care</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>Personal Care</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Gift</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Shoes</Button>
                  </Link>
                  <Link to="/">
                    <Button>Personal Care</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>Personal Care</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Blog</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contact Us</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
