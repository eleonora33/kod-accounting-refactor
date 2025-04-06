import React, { useEffect } from 'react';
import './ProjectsPage.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img_2 from '../assets/images/img-2.png';
import img_3 from '../assets/images/img-3.png';
import img_4 from '../assets/images/img-4.png';
import img_5 from '../assets/images/img-5.png';

const projects = [
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

function ProjectsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const items = document.querySelectorAll('.project-row');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-page">
      <div className="container">
        <h1 className="projects-title">Наши Проекти</h1>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-row fade-in" key={index}>
              <div className="project-left">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-right">
                <h2>{project.title}</h2>
                <p><strong>Клиент:</strong> {project.client}</p>
                <p><strong>Година:</strong> {project.year}</p>
                <p>{project.description}</p>
                <HashLink smooth to="/#contactSection" className="contact-btn">
  Контактирај нè
</HashLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
