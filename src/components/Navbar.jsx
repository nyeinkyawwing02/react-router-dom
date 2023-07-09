import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <p className='logo'>Blog</p>

        <ul>
          <li>
            <NavLink activeclassname='active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/blogs'>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
