import React from 'react'
import "./Footer.css";
import img_map from "../assets/images/map-icon.png";
import img_call from "../assets/images/call-icon.png";
import img_mail from "../assets/images/mail-icon.png";
import fb_icon from "../assets/images/fb-icon1.png";
import twiter_icon from "../assets/images/twitter-icon1.png";
import linkedin_icon from "../assets/images/linkedin-icon1.png";
import youtube from "../assets/images/youtub-icon1.png";

function Footer() {
  return (
    <div className="footer_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <h4 className="about_text">КОД локатор</h4>
            <div className="location_text"><img src={img_map}/><span className="padding_left_15">Градски Парк 1000, Скопје</span></div>
            <div className="location_text"><img src={img_call}/><span className="padding_left_15">++389 72111111</span></div>
            <div className="location_text"><img src={img_mail}/><span className="padding_left_15">example@yahoo.com</span></div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <h4 className="about_text">КОД консалтинг</h4>
            <p className="dolor_text">Овластена и сертифицирана компанија за финансиски услуги, сметководство и финансиски консалтинг.
              Членка на сметководствена комора на Република Македонија.
              </p>
          </div>
          <div className="col-lg-4 col-sm-6" id="subscribeSection">
            <h4 className="about_text">КОД информатор</h4>
            <input type="text" className="mail_text" placeholder="Enter your email" name="Enter your email"/>
            <div className="subscribe_bt"><a href="#">Претплати се</a></div>
            <div className="footer_social_icon">
              <ul>
                <li><a href="#"><img src={fb_icon}/></a></li>
                 <li><a href="#"><img src={twiter_icon}/></a></li>
                <li><a href="#"><img src={linkedin_icon}/></a></li>
                <li><a href="#"><img src={youtube}/></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright_section">
          <div className="copyright_text">Copyright 2023 All Right Reserved By <a href="#">Eleonora Gjorgjieva</a></div>
       </div>
      </div>
    </div>
  )
}

export default Footer
