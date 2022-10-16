import React from 'react';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Swipe = (props) => {
//  console.log(props.Data)
 const data = props.Data;
  return (
    <div id='testimonials' className='col-12 col-md-6'>
  <Swiper className="container testimonials__container"      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      data={data}
      pagination={{ clickable: true }}>
  {
       data ? data.map((p, i) => {
          return(
            <SwiperSlide className="testimonial" key={i}>
            <div className="client__avatar">
            <h5 className='text-center text-light'>{p.title}</h5>
  <h2 className='text-center text-light'>{p.text}</h2>
              <img className='img-fluid' src={p.image} alt={p.name} />
            </div>
            <h5 className="client__name">{p.name}</h5>
            <small className="client__review text">{p.review}</small>
            </SwiperSlide>
          )
        }):''
      }
  </Swiper>
    </div>
  )
}

export default Swipe


