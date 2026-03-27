import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import './../styles.css';

const NAV_ITEMS = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Brand */}
      <Link to="home" smooth duration={500} className="nav-brand">
        SP
      </Link>

      {/* Desktop links — always visible */}
      <div className="nav-links-desktop">
        {NAV_ITEMS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            smooth
            duration={500}
            spy
            activeClass="nav-link-active"
            className="nav-link"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="hamburger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="nav-links-mobile">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
