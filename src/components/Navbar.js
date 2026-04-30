import React, { useState } from 'react';
import logo from '../assets/images/kod-consulting-navbar-composite.png';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const navItems = [
    { label: 'Дома', to: '/#homeSection' },
    { label: 'За нас', to: '/#aboutUsSection' },
    { label: 'Услуги', to: '/#servicesSection' },
    { label: 'Процес', to: '/#processSection' },
    { label: 'Алатки', to: '/#toolsSection' },
    { label: 'Контакт', to: '/#contactSection' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-brandNavy/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <HashLink smooth to="/#homeSection" className="flex items-center">
          <img
            className="h-9 w-56 object-contain sm:h-10 sm:w-72"
            src={logo}
            alt="KOD Consulting"
          />
        </HashLink>

        <button
          type="button"
          className="absolute right-5 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brandNavy/15 bg-white text-brandNavy lg:hidden"
          aria-expanded={isNavOpen}
          aria-label="Отвори мени"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className="text-2xl leading-none">{isNavOpen ? '×' : '≡'}</span>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <HashLink
              key={item.to}
              smooth
              to={item.to}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite transition hover:text-brandCyanDeep"
            >
              {item.label}
            </HashLink>
          ))}
          <HashLink
            smooth
            to="/#contactSection"
            className="rounded-full bg-brandNavy px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-brandCyan shadow-soft transition hover:bg-graphite"
          >
            Закажи консултација
          </HashLink>
        </div>
      </div>

      {isNavOpen && (
        <div className="border-t border-brandNavy/10 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <HashLink
                key={item.to}
                smooth
                to={item.to}
                className="rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-graphite hover:bg-mist"
                onClick={() => setNavOpen(false)}
              >
                {item.label}
              </HashLink>
            ))}
            <HashLink
              smooth
              to="/#contactSection"
              className="mt-2 rounded-full bg-brandNavy px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-brandCyan"
              onClick={() => setNavOpen(false)}
            >
              Закажи консултација
            </HashLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
