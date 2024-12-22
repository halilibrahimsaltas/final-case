import { Button } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);


  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1 mb-1 mr-2">
                  <FiMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 mb-1 ml-1">
                  <FaAngleDown />
                </span>
              </Button>
              <div className={`sidebarNav ${isOpenSidebarVal ? "open" : ""}`}>
                <ul>
                  <li>
                    <Link to="/cat/1">
                      <Button>Fashion<FaAngleRight className="ml-auto" /></Button>
                    </Link>
                    <div className="submenu">
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
                  <li>
                    {" "}
                    <Link to="/">
                      <Button>Electronics<FaAngleRight className="ml-auto" /></Button>
                    </Link>
                    <div className="submenu">
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
                  <li>
                    <Link to="/">
                      <Button>Market</Button>
                    </Link>
                    <div className="submenu">
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
                  <li>
                    <Link to="/">
                      <Button>Gift</Button>
                    </Link>
                    <div className="submenu">
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
                <Link to="/cat/6767166319696c44689ca691">
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
                <Link to="/cat/6767167019696c44689ca693">
                  <Button>ELECTRONICS</Button>
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
                <Link to="/cat/6767167a19696c44689ca695">
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
