import HomeBanner from "../../Component/HomeBanner";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import ProductItem from "../../Component/ProductItem";
import HomeCat from "../../Component/HomeCat";
import banner1 from "../../assets/images/back1.webp"
import banner2 from "../../assets/images/back2.webp"

import "swiper/css";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat/>

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-12 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                {/* Swiper with Scrollbar */}
                <Swiper
                  modules={[Scrollbar]}
                  spaceBetween={10} // Space between slides
                  slidesPerView={5} // Number of slides visible
                  scrollbar={{ draggable: true }} // Enable draggable scrollbar
                >
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                
                

                </Swiper>
              </div>

             <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                {/* Swiper with Scrollbar */}
                <Swiper
                  modules={[Scrollbar]}
                  spaceBetween={10} // Space between slides
                  slidesPerView={5} // Number of slides visible
                  scrollbar={{ draggable: true }} // Enable draggable scrollbar
                >
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                
                

                </Swiper>
              </div>


              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Flash Products</h3>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                {/* Swiper with Scrollbar */}
                <Swiper
                  modules={[Scrollbar]}
                  spaceBetween={10} // Space between slides
                  slidesPerView={5} // Number of slides visible
                  scrollbar={{ draggable: true }} // Enable draggable scrollbar
                >
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec"> 
                <div className="banner ">
                <img src={banner1} className="cursor w-100" />

              </div>
              <div className="banner">
                <img src={banner2} className="cursor w-100" />

              </div>

              </div>

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
