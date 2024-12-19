import Sidebar from "../../Component/SideBar";
import Button from "@mui/material/Button";
import { IoMenuOutline } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { CgMenuGridR } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ProductItem from "../../Component/ProductItem";
import Pagination from '@mui/material/Pagination';


const Listing = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('three');
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <div>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />

            <div className="content_right">
              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-item-center btnWrapper">
                  <Button onClick={()=>setProductView('one')}>
                    <IoMenuOutline />
                  </Button>
                  <Button onClick={()=>setProductView('two')}>
                    <PiSquaresFourFill />
                  </Button>
                  <Button onClick={()=>setProductView('three')}>
                    <CgMenuGridR />
                  </Button>
                </div>

                <div className="ml-auto showByFilter">
                  <Button   onClick={handleClick}>
                    Show 9 <FaAngleDown />
                  </Button>
                  <Menu
                    className="w-100 showPerDropdown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                    <MenuItem onClick={handleClose}>50</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing">
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
              </div>

              <div className="d-flex align-items-center justify-content-center mt-5">
               <Pagination count={10} color="primary" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;