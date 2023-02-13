import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
const [click, setClick] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link  to="/" className='navbar-logo'>
          TRVL <i className='fab fa-typo3' />
        </Link>
        <div className='menu-icon'>
          <i className={click ? 'fas fas-times' : 'fas fa-bars' } />
        </div>
      </div>
    </div>
  )
}

export default Navbar