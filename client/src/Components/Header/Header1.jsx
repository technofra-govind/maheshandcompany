import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [clicked1, setClicked1] = useState(false); // For main menu
  const [clicked, setClicked] = useState(false);   // For submenu
  const menuRef = useRef(null);
  const mainMenuRef = useRef(null);

  const handleClick = () => {
    setClicked1(!clicked1);
  };

  const handleClick1 = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mainMenuRef.current && !mainMenuRef.current.contains(event.target)) {
        setClicked1(false); // Close the main menu
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClicked(false); // Close the submenu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mainMenuRef, menuRef, setClicked1, setClicked]);

  return (
    <div className='sticky-header'>
      <style>
        {`
          body {
            overflow-y: ${clicked1 ? 'hidden' : 'auto'};
          }
          .header-sub-menu {
            display: ${clicked ? 'block' : 'none'};
          }
          .sticky-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background-color: white; /* Add your preferred background color */
          }
        `}
      </style>
      <div className='nav-bar'>
        <a>
          <img src='/assets/img/logo/m.png' />
        </a>
        <div>
          <ul id='navbar' className={clicked1 ? ' #navbar active' : '#navbar'}>
            <li className='nav-links'><Link to={'/'} className='active'>Home</Link></li>
            <li className='nav-links'><Link to={'/about'}>About Us</Link></li>
            <li className='nav-links' id='our-product'>
              <Link href='#' className='' onClick={handleClick1}>Our Product<span>+</span></Link>
              <ul ref={menuRef} className='header-sub-menu'>
                <li><Link to={'/acrylic'}>Acrylic And Plastics</Link></li>
                <li><Link to={'/anatomy'}>Anatomy Models</Link></li>
                <li><Link to={'/bags'}>Bags</Link></li>
                <li><Link to={'/crystal'}>Crystal</Link></li>
                <li><Link to={'/fiber'}>Fiber</Link></li>
                <li><Link to={'/leatherite'}>Leatherite</Link></li>
                <li><Link to={'/metal'}>Metal</Link></li>
                <li><Link to={'/sandtimers'}>Sand Timers</Link></li>
                <li><Link to={'/shirtandtShirt'}>Shirts & T-Shirts</Link></li>
                <li><Link to={'/umbrella'}>Umbrella</Link></li>
                <li><Link to={'/spacepens'}>Space Pens</Link></li>
              </ul>
            </li>
            <li className='nav-links'><Link to={'/newarrival'}>New Arrivals</Link></li>
            <li className='nav-links'><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </div>
        <div id='mobile' onClick={handleClick}>
          <i className={clicked1 ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
