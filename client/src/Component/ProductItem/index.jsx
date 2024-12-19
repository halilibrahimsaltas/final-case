import Rating from "@mui/material/Rating";
import React from "react";
import { Button } from "@mui/material";

import "swiper/css";
import "swiper/css/scrollbar";


const ProductItem = (props)=>{
    return(
    <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://m.media-amazon.com/images/I/419kQt6LLNL._AC_SY200_.jpg"
            className="w-100"
            alt="Product 1"
          />
          <div className="actions"> 

          </div>

        </div>
        <div className="info">
          <h4>
            Stanley Adventure Portable Cooler Camping Ice Box 28lt
          </h4>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            precision={0.5}
            readOnly
            size="small"
          />

          <div className="d-flex">
            <span className="oldPrice">$60.00</span>
            <span className="newPrice ml-3">$52.99</span>
          </div>
        </div>
      </div>
      )

}


export default ProductItem;