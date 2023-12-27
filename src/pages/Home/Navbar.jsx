import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-scroll'

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 500) {
          closeMenu();
        }
      }

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? 'active':""}`}>
      <div>
        <img src="" alt="" srcset="Logoimage" />
      </div>
      <a href='/' className={`nav_hamburger ${navActive ? 'active':""}`} onClick={toggleNav}>
      <span className='nav_hamburger_line'></span>
      <span className='nav_hamburger_line'></span>
      <span className='nav_hamburger_line'></span>
      </a>
      <div className={`nav--items ${navActive ? 'active':""}`}>
        <ul>
          <li>
            <Link onClick={closeMenu} activeClass="navBar--active-contect" spy={true} smooth={true} offset={-70} duration={500} to="HeroSection" className='navBar--content'>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="navBar--active-contect" spy={true} smooth={true} offset={-70} duration={500} to="Myprotfolio" className='navBar--content'>
              Protfolio
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="navBar--active-contect" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className='navBar--content'>
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="navBar--active-contect" spy={true} smooth={true} offset={-70} duration={500} to="Tesimonials" className='navBar--content'>
              Tesimonials
            </Link>
          </li>
        </ul>
      </div>
            <Link onClick={closeMenu} activeClass="navBar--active-contect" spy={true} smooth={true} offset={-70} duration={500} to="ContactMe" className='navBar--content'>
              ContactMe
            </Link>
    </nav>
  )
}

export default Navbar