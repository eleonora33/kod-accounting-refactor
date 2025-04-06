import React from "react";
import "./Testimonials.css";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div className="client_section layout_padding">
       <div className="container">
          <div className="testimonials-content">
            <TestimonialsCarousel />
          </div>
        </div>
       </div>     
  )
}

export default Testimonials;
