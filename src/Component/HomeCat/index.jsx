import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

const HomeCat = () => {
  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-4 hd ">Last Deals of The Year</h3>
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={10} // Space between slides
          slidesPerView={10} // Number of slides visible
          scrollbar={{ draggable: true }} // Enable draggable scrollbar
        >
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://cdn.dsmcdn.com/mnresize/200/200/homepage/prod/2024-12-03/85e24984-319b-4927-a127-ac3295d0152d.png"  />
              <h6>Best Sales</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://cdn.dsmcdn.com/mnresize/200/200/homepage/prod/2024-12-03/85e24984-319b-4927-a127-ac3295d0152d.png"  />
              <h6>Best Sales</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://cdn.dsmcdn.com/mnresize/200/200/homepage/prod/2024-12-03/85e24984-319b-4927-a127-ac3295d0152d.png"  />
              <h6>Best Sales</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://cdn.dsmcdn.com/mnresize/200/200/homepage/prod/2024-12-03/85e24984-319b-4927-a127-ac3295d0152d.png"  />
              <h6>Best Sales</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://cdn.dsmcdn.com/mnresize/200/200/homepage/prod/2024-12-03/85e24984-319b-4927-a127-ac3295d0152d.png"  />
              <h6>Best Sales</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://cdn.dsmcdn.com/mnresize/200/200/homepage/prod/2024-12-03/85e24984-319b-4927-a127-ac3295d0152d.png"  />
              <h6>Best Sales</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center">
              <img src="https://cdn.dsmcdn.com/mnresize/200/200/homepage/prod/2024-12-03/85e24984-319b-4927-a127-ac3295d0152d.png"  />
              <h6>Best Sales</h6>
            </div>
          </SwiperSlide>
        
          
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
