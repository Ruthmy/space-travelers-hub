import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../bd/MenuData';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <div className="nav__logo">
      <h1>Space Travelers` Hub</h1>
    </div>
    <div>
      <ul>
        {routes.map((route) => (
          <li key={route.text}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#121212' : '#888',
              })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
