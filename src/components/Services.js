import React, { useState, useEffect } from 'react';
import icon_1 from "../assets/images/icon-1.png";
import icon_2 from "../assets/images/icon-2.png";
import icon_3 from "../assets/images/icon-3.png";
import icon_4 from "../assets/images/icon-4.png";
import './Services.css';

// ✅ Модал со X копче
const Modal = ({ show, onClose, title, content }) => {
  if (!show) return null;

  const lines = content.split('\n');

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close-x" onClick={onClose}>×</button>
        <h3>{title}</h3>

        <div className="modal-content">
          <p className="modal-subtitle">Детални услуги:</p>
          <ul>
            {lines.map((line, index) => (
              <li key={index}>{line.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function Services() {
  const [modalInfo, setModalInfo] = useState({ show: false, title: '', content: '' });

  const openModal = (title, content) => {
    setModalInfo({ show: true, title, content });
  };

  const closeModal = () => {
    setModalInfo({ ...modalInfo, show: false });
  };

  useEffect(() => {
    document.body.classList.toggle('modal-open', modalInfo.show);
  }, [modalInfo.show]);

  return (
    <div className="services-section layout_padding" id="servicesSection">
      <div className="container">
        <h1 className="section-title">Што правиме</h1>
        <p className="section-subtitle">Секој ден е нова можност да се направи нешто одлично.</p>

        <div className="service-grid">
          <div className="service-box">
            <div className="icon"><img src={icon_1} alt="Сметководство" /></div>
            <h3 className="service-title">Сметководство</h3>
            <p className="service-desc">Ние го водиме вашето сметководство со доверба.</p>
            <button className="service-link" onClick={() => openModal("Сметководство", "Водење книговодство\nПресметка плати\nИзработка финансиски извештаи")}>Повеќе</button>
          </div>

          <div className="service-box">
            <div className="icon"><img src={icon_2} alt="Советување" /></div>
            <h3 className="service-title">Советување</h3>
            <p className="service-desc">Професионални совети за оптимизација на вашите финансии.</p>
            <button className="service-link" onClick={() => openModal("Советување", "Стратешки совети\nФинансиски анализи\nПланирање според вашите потреби")}>Повеќе</button>
          </div>

          <div className="service-box">
            <div className="icon"><img src={icon_3} alt="Инвестиции" /></div>
            <h3 className="service-title">Инвестиции</h3>
            <p className="service-desc">Водство за паметно инвестирање и раст на капиталот.</p>
            <button className="service-link" onClick={() => openModal("Инвестиции", "Советување за вложување\nАнализа на пазарот\nСледење на инвестиции")}>Повеќе</button>
          </div>

          <div className="service-box">
            <div className="icon"><img src={icon_4} alt="Финансии" /></div>
            <h3 className="service-title">Финансии</h3>
            <p className="service-desc">Контрола и анализа на сите ваши финансиски процеси.</p>
            <button className="service-link" onClick={() => openModal("Финансии", "Финансиско моделирање\nКонтрола на трошоци\nМесечен преглед на работење")}>Повеќе</button>
          </div>
        </div>

        <Modal
          show={modalInfo.show}
          onClose={closeModal}
          title={modalInfo.title}
          content={modalInfo.content}
        />
      </div>
    </div>
  );
}

export default Services;
