import React from 'react';
import logo from '../assets/images/kod-consulting-footer-horizontal-cropped.png';

function Footer() {
  return (
    <footer id="subscribeSection" className="border-t border-white/10 bg-brandNavy px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <img
            className="h-12 w-72 object-contain object-left sm:h-14 sm:w-96"
            src={logo}
            alt="KOD Consulting"
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-brandLavender">
            Сметководство, даночно советување и финансиски консалтинг за стабилен бизнис раст.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-[0.12em] text-brandCyan">
          <a className="hover:text-white" href="#homeSection">Дома</a>
          <a className="hover:text-white" href="#servicesSection">Услуги</a>
          <a className="hover:text-white" href="#contactSection">Контакт</a>
        </div>
        <p className="text-sm text-brandLavender">© 2026 KOD Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
