import * as React from "react";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Component/QuantityBox";
import { Button } from "@mui/material";
import { IoCart } from "react-icons/io5";

const ProductDetails = () => {
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <img
                src="https://m.media-amazon.com/images/I/419kQt6LLNL._AC_SY200_.jpg"
                className="w-100"
                alt="Product 1"
              />
            </div>

            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                Stanley Adventure Portable Cooler Camping Ice Box 28lt
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <span className="text-dark cursor ml-2">1</span>
                  </div>
                </li>
              </ul>

              <div className="d-flex info mb-2">
                <span className="oldPrice">$60.00</span>
                <span className="newPrice ml-3">$52.99</span>
              </div>

              <span className="badge badge-success">IN STOCK</span>

              <p className="mt-3 description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quos ducimus corrupti iusto quisquam, blanditiis, officiis eius reiciendis unde, neque facilis magnam amet nemo obcaecati animi possimus ab veniam aut.
              </p>

              <div className="d-flex align-items-center mt-4">
                <QuantityBox/>
                <Button className='btn-purple btn-lg btn-big btn-round ml-3' variant="outlined"><IoCart /> &nbsp; Add to cart</Button>
                


              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
