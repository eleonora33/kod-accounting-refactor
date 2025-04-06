import React, { useState } from 'react';
import './About.css';
import imgOne from "../assets/images/img-1.png";

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="services_section layout_padding" id="aboutUsSection">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={imgOne} className="image_1" alt="about" />
          </div>
          <div className="col-md-8">
            <h1 className="services_taital">Добродојдовте во светот на сметководството</h1>
            <p className="services_text">
              Сметководството е финансиски процес што вклучува регистрација и анализа на финансиски трансакции во организација.
              {showMore && (
                <>
                  {' '}
                  Неговите цели вклучуваат водење на записи, анализа на финансиите, извештаи и усогласување со законодавство.
                  Сметководството помага во управување со финансии, планирање и одлучување.
                </>
              )}
            </p>
            <div className="moremore_bt">
              <button onClick={toggleText}>
                {showMore ? "Помалку" : "Повеќе"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
