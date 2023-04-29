import React, { useState, useEffect } from 'react';
import '../assets/css/NavBar.css';

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <a href="/" className="nav__logo">
        <h3 className="nav__logo">BlackHole</h3>
      </a>
    </div>
  );
}

export default NavBar;
