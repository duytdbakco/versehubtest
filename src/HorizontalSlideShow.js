import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import slides from './data/dataSlides';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';

function HorizontalSlideShow() {
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);

  return (
    <div className="container">
      <h1 className="heading">Frontend Test VERSEHUB</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} onClick={() => setSelectedSlide(slide)}>
            <img src={slide.image} alt="slide_image" />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      {selectedSlide && (
        <div className="selected-slide">
          <h2>{selectedSlide.catName}</h2>
          <img src={selectedSlide.image} alt="cat_image" />
          <p>{selectedSlide.catDescription}</p>
          <button onClick={() => setSelectedSlide(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default HorizontalSlideShow;
