import React, { useState } from 'react';
import './Portfolio.css';
import img_2 from '../assets/images/img-2.png';
import img_3 from '../assets/images/img-3.png';
import img_4 from '../assets/images/img-4.png';
import img_5 from '../assets/images/img-5.png';
import img_6 from '../assets/images/img-6.png';
import search_icon from '../assets/images/search-icon.png';
import icon_1 from '../assets/images/icon-1.png';
import icon_2 from '../assets/images/icon-2.png';
import icon_3 from '../assets/images/icon-3.png';
import icon_4 from '../assets/images/icon-4.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const projectDetails = [
  {
    img: img_2,
    title: "Финансиско Оптимизирање",
    client: "Client A",
    year: 2023,
    description: "Оптимизација на трошоци и зголемување на профитот.",
  },
  {
    img: img_3,
    title: "Инвестициска Анализа",
    client: "Client B",
    year: 2024,
    description: "Изработка на инвестициона стратегија.",
  },
  {
    img: img_4,
    title: "Даночна Стратегија",
    client: "Client C",
    year: 2022,
    description: "Проект за даночна усогласеност.",
  },
  {
    img: img_5,
    title: "Финансиска Трансформација",
    client: "Client D",
    year: 2023,
    description: "Целосен редизајн на финансиско работење.",
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="portfolio_section layout_padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="services_taital">Успешни Проекти</h1>
            <p className="services_text">Време е постапките да зборуваат погласно од зборовите</p>
            <div className="moremore_bt"><Link to="/projects">Повеќе</Link></div>
            <div className="image_6"><img src={img_6} alt="img-6" /></div>
          </div>

          <div className="col-md-6">
            <div className="image_grid">
              {projectDetails.map((project, i) => (
                <div className="image_card" key={i} onClick={() => openModal(project)}>
                  <img src={project.img} alt={`img-${i}`} className="grid_image" />
                  <div className="overlay">
                    <img src={search_icon} alt="search" className="search_icon" />
                    <h2 className="fact_text">Повеќе Факти</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="row stats_row">
          <div className="col-md-3 stat_block"><img src={icon_3} alt="icon" /><h3>30+</h3><p>Години во Бизнисот</p></div>
          <div className="col-md-3 stat_block"><img src={icon_4} alt="icon" /><h3>20000+</h3><p>Испорачани Проекти</p></div>
          <div className="col-md-3 stat_block"><img src={icon_2} alt="icon" /><h3>10000+</h3><p>Задоволни Клиенти</p></div>
          <div className="col-md-3 stat_block"><img src={icon_1} alt="icon" /><h3>1500+</h3><p>Услуги</p></div>
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.img} alt="modal" className="modal-image" />
            <h2>{selectedProject.title}</h2>
            <p><strong>Клиент:</strong> {selectedProject.client}</p>
            <p><strong>Година:</strong> {selectedProject.year}</p>
            <p>{selectedProject.description}</p>
            <HashLink
              smooth
              to="/#contactSection"
              className="modal-btn"
              onClick={closeModal}
              style={{ textDecoration: 'none' }}
            >
              Контактирај
            </HashLink>
            <button className="modal-close" onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
