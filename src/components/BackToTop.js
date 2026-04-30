import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <HashLink
      smooth
      to="/#homeSection"
      aria-label="Врати се горе"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brandCyan/30 bg-brandNavy text-2xl font-bold leading-none text-brandCyan shadow-soft transition hover:bg-graphite"
    >
      ↑
    </HashLink>
  );
}

export default BackToTop;
