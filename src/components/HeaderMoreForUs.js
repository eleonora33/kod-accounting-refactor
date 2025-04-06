import React from 'react'
import imgOne from "../assets/images/img-1.png";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function HeaderMoreForUs() {
    return (
      <div>
        <Navbar />
      <div className="services_section layout_padding" id='moreForUs'>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="services_taital">Добродојдовте во светот на сметководството</h1>
            <p className="services_text">Сметководството е финансиски процес што вклучува регистрација и анализа на финансиски трансакции во организација. Неговите цели вклучуваат водење на записи, анализа на финансиите, извештаи и усогласување со законодавство. Сметководството помага во управување со финансии, планирање и одлучување. </p>
            <div className="moremore_bt"><Link to="/">Дома</Link></div>
          </div>
          <div className="col-md-4">
            <div><img src={imgOne} className="image_1"/></div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
  
  export default HeaderMoreForUs;