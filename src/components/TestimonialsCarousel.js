import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import round_1 from "../assets/images/round-1.png";
import round_2 from "../assets/images/round-2.png";
import avatarOne from "../assets/images/avatar-1.png";
import avatarTwo from "../assets/images/avatar-2.png";
import avatarThree from "../assets/images/avatar-3.png";

function TestimonialsCarousel() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
      showIndicators={true}
    >
      <div className="client_section_2 layout_padding">
        <h1 className="what_taital">Што велат клиентите за нас</h1>
        <ul>
          <li><img src={round_1} className="round_1" alt="round1" /></li>
          <li><img src={avatarOne} className="image_11" alt="avatar1" /></li>
          <li><img src={round_2} className="round_2" alt="round2" /></li>
        </ul>
        <p className="dummy_text">
          "Сметководството можеби не беше нашата јака страна, но со КОД Консалтинг тоа не ни прави проблем. Тие ни обезбедуваат сигурност и спокојство во однос на нашите финансии."
        </p>
      </div>

      <div className="client_section_2 layout_padding">
        <h1 className="what_taital">Што велат клиентите за нас</h1>
        <ul>
          <li><img src={round_1} className="round_1" alt="round1" /></li>
          <li><img src={avatarTwo} className="image_11" alt="avatar2" /></li>
          <li><img src={round_2} className="round_2" alt="round2" /></li>
        </ul>
        <p className="dummy_text">
          "Ние сме во секторот на малите бизниси и КОД Консалтинг секогаш биле со нас, од нашиот прв ден. Тие се грижат за секој детаљ, и ни помагаат да се фокусираме на растот на нашиот бизнис."
        </p>
      </div>

      <div className="client_section_2 layout_padding">
        <h1 className="what_taital">Што велат клиентите за нас</h1>
        <ul>
          <li><img src={round_1} className="round_1" alt="round1" /></li>
          <li><img src={avatarThree} className="image_11" alt="avatar3" /></li>
          <li><img src={round_2} className="round_2" alt="round2" /></li>
        </ul>
        <p className="dummy_text">
          "КОД Консалтинг е непроценлив партнер во нашиот успех. Нивниот тим е одличен, професионален и секогаш на располагање за нас. Ги препорачувам од срце!"
        </p>
      </div>
    </Carousel>
  );
}

export default TestimonialsCarousel;
