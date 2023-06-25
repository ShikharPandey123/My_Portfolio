import React from "react";
import "./testimonials.css";
// import AVTR2 from "../../assets/avatar2.jpg";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonials = () => {
  const data = [
    {
      // avatar: AVTR2,
      name: "ABC",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error unde tenetur exercitationem eveniet ipsa accusamus perspiciatis pariatur, nihil ducimus asperiores repudiandae magni expedita delectus maiores deserunt, eligendi molestias consequuntur nulla!",
    },
    {
      // avatar: AVTR2,
      name: "ABC",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error unde tenetur exercitationem eveniet ipsa accusamus perspiciatis pariatur, nihil ducimus asperiores repudiandae magni expedita delectus maiores deserunt, eligendi molestias consequuntur nulla!",
    },
    {
      // avatar: AVTR3,
      name: "ABC",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error unde tenetur exercitationem eveniet ipsa accusamus perspiciatis pariatur, nihil ducimus asperiores repudiandae magni expedita delectus maiores deserunt, eligendi molestias consequuntur nulla!",
    },
    {
      // avatar: AVTR4,
      name: "ABC",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error unde tenetur exercitationem eveniet ipsa accusamus perspiciatis pariatur, nihil ducimus asperiores repudiandae magni expedita delectus maiores deserunt, eligendi molestias consequuntur nulla!",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from Colleagues</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"  
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" /></div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
