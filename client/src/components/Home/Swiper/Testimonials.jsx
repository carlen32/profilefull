import React from 'react';
import Data from './Data';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
  <h5>Review from clients</h5>
  <h2>Testimonials</h2>
  <Swiper className="container testimonials__container"      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
  {
       Data ? Data.map((p, i) => {
          return(
            <SwiperSlide className="testimonial" key={i}>
            <div className="client__avatar">
              <img src={p.image} alt={p.name} />
            </div>
            <h5 className="client__name">{p.name}</h5>
            <small className="client__review">{p.review}</small>
            </SwiperSlide>
          )
        }) :''
      }
  </Swiper>
    </section>
  )
}

export default Testimonials


