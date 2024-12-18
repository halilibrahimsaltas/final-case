import React from "react";
import Slider from "react-slick";

const  HomeBanner= ()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true, 
        autoplay:true
      };
    return(
         <div className="homeBannerSection">
           <Slider {...settings}>
             <div className="item">
            
              <img src="https://aimg.kwcdn.com/cart/1f193487540/a9aaf4f5-c017-4941-a81d-4483b56e2701.png?imageView2/q/100!/format/webp" className="w-100" />

              </div>    

              <div className="item">
                 <img src="https://m.media-amazon.com/images/I/81in2jMG2UL._SX3000_.jpg" className="w-100" />   
              
              </div>     
              <div className="item">
                 <img src="https://m.media-amazon.com/images/I/81DuLuSk7tL._SX3000_.jpg" className="w-100" />   
              
              </div> 
              <div className="item">
                 <img src="https://m.media-amazon.com/images/I/81jo-+2mhnL._SX3000_.jpg" className="w-100" />   
              
              </div> 
              <div className="item">
            
            <img src="https://aimg.kwcdn.com/cart/1f193487540/a9aaf4f5-c017-4941-a81d-4483b56e2701.png?imageView2/q/100!/format/webp" className="w-100" />

            </div>   
              <div className="item">
                 <img src="https://m.media-amazon.com/images/I/71rt87Bh8xL._SX3000_.jpg" className="w-100" />   
              
              </div> 
           </Slider>
         </div>
        
    )
}

export default HomeBanner;