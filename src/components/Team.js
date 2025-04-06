import React from 'react'
import "./Team.css";
import img_7 from "../assets/images/img-7.png";
import img_8 from "../assets/images/img-8.png";
import img_9 from "../assets/images/img-9.png";
import img_10 from "../assets/images/img-10.png";
import fbIcon from "../assets/images/fb-icon.png";
import twiterIcon from "../assets/images/twitter-icon.png";
import linkedinIcon from "../assets/images/linkedin-icon.png";
import Navbar from './Navbar';

function Team() {
  return (
    <div>
    <div className="team_section layout_padding" id='teamSection'>
      <div className="container">
        <h1 className="what_taital">Нашиот тим од експерти</h1>
        <p className="what_text_1">Ние сме горди на нашите луѓе во Код Консалтинг. Од нашите клиенти менаџери, сметководители, даночни експерти и други специјалисти - нашиот тим ќе ви ја обезбеди сета поддршка што ви треба. </p>
        <div className="team_section_2 layout_padding">
          <div className="row">
            <div className="col-sm-3">
              <img src={img_7} className="image_7"/>
              <p className="readable_text">Марјан</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src={fbIcon} alt='fb'/></a></li>
                  <li><a href="#"><img src={twiterIcon} alt='twiter'/></a></li>
                  <li><a href="#"><img src={linkedinIcon} alt='linkedin'/></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src={img_8} className="image_7"/>
              <p className="readable_text">Надица</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src={fbIcon} alt='fb'/></a></li>
                  <li><a href="#"><img src={twiterIcon} alt='twiter'/></a></li>
                  <li><a href="#"><img src={linkedinIcon} alt='linkedin'/></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src={img_9} className="image_7"/>
              <p className="readable_text">Алиса</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src={fbIcon} alt='fbicon'/></a></li>
                  <li><a href="#"><img src={twiterIcon} alt='twitericon'/></a></li>
                  <li><a href="#"><img src={linkedinIcon} alt='linkedinicon'/></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src={img_10} className="image_7"/>
              <p className="readable_text">Елеонора</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src={fbIcon} alt='fb'/></a></li>
                  <li><a href="#"><img src={twiterIcon} alt='twiter'/></a></li>
                  <li><a href="#"><img src={linkedinIcon} alt='linkedin'/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Team
