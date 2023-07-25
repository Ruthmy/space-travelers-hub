import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

const routes = [
  {
    to: '/',
    text: 'Rockets',
  },
  {
    to: '/missions',
    text: 'Missions',
  },
  {
    to: '/profile',
    text: 'My Profile',
  },
];

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
