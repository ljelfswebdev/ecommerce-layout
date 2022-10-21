// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import React, { useRef, useState } from "react";

import watches from '../../data/items.js';

const BestSellersSlider = () => {

    return (
        <div className="bestSellersSlider">
        <Swiper
        spaceBetween={25}
        slidesPerView={1} 
        modules={[Pagination]}
        className="mySwiper"
        pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
      >

        {watches.map((w) => (
            <SwiperSlide key={w.id}>
                <div className="card">
                    <div className="image">
                       <img src={`/images/products/${w.image}.png`} alt={w.name}/> 
                    </div>
                    
                    <p>{w.name}</p>
                    <div className="color">
                        <span className="color" style={{backgroundColor:w.color}}></span>
                    </div>
                    
                    <p>£{w.price}.00</p>
                </div>
                
            </SwiperSlide>
        ))};

      </Swiper>

    </div>
    );
};

export default BestSellersSlider;
