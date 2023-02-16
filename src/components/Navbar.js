import { click } from '@testing-library/user-event/dist/click';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

const Navbar = () => {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);


const showButton = () => {
  if(window.innerWidth <= 960) {
    setButton(false);
  }else{
    setButton(true);
  }
}
  useEffect(() => {
    showButton()
  }, []);

   window.addEventListener('resize', showButton);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link  to="/" className='navbar-logo' onClick={closeMobileMenu}>
          ALLASHE <i className='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/FAQs' className='nav-links' onClick={closeMobileMenu}>
                FAQs
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </div>
  )
}

export default Navbar