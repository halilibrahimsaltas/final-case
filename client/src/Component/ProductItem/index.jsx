import Rating from "@mui/material/Rating";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import "swiper/css";
import "swiper/css/scrollbar";


const ProductItem = (props)=>{



    return(
    <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper">
        <Link to={'product/1'}><img
            src={props.item?.images[0]}
            className="w-100"
            alt="Product 1"
          />
          </Link>
          
          <div className="actions"> 

          </div>

        </div>
        <div className="info">
          <Link to={'product/1'}><h4>
            {props?.item?.name?.substr(0,30)+'...'}
          </h4>
          </Link>
          
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={props.item?.rating}
            precision={0.5}
            readOnly
            size="small"
          />

          <div className="d-flex">
            <span className="oldPrice text-danger">${props?.item?.oldPrice}</span>
            <span className="newPrice ml-3">${props?.item?.oldPrice}</span>
          </div>
        </div>
      </div>
      )

}


export default ProductItem;