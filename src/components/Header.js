import React, { useState } from 'react';
import './Header.css';
import bannerImg from '../assets/images/banner-img.png';

function Header() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(prev => !prev);
  };

  return (
    <div className="header_section" id="homeSection">
      <div className="header_left">
        <div className="banner_main">
          <h1 className="banner_taital">сметководствени финансиски услуги</h1>
          <p className="banner_text">
            Сметководителот им помага на бизнисите да донесуваат критични финансиски одлуки со собирање, следење и корекција на финансиите на компанијата.
          </p>

          {showMore && (
            <p className="more_info_text">
              Нашиот тим нуди целосна поддршка при анализа на трошоци, буџетирање, даночна оптимизација и финансиско планирање.
              Ви помагаме да го оптимизирате вашиот раст и да донесете информирани одлуки.
            </p>
          )}

<div className="btn_main">
  <div className="more_bt">
    <button onClick={handleToggle}>
      {showMore ? 'Помалку' : 'Повеќе'}
    </button>
  </div>
</div>

        </div>
      </div>

      <div className="header_right">
        <img className="banner_img" src={bannerImg} alt="banner" />
      </div>
    </div>
  );
}

export default Header;
