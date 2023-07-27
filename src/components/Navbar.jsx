import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = () => (
  <>
    <nav>
      <NavLink to="/">
        <div className="nav__logo d-flex-row">
          <img src="logo192.png" alt="Space Travelers Logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
      </NavLink>
      <div>
        <ul className="nav__routes d-flex-row">
          <li key="Rockets">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Rockets
            </NavLink>
          </li>
          <li key="Missions">
            <NavLink
              to="/missions"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Missions
            </NavLink>
          </li>
          <p>|</p>
          <li key="My Profile">
            <NavLink
              to="/profile"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <div className="nav__line" />
  </>
);

export default Navbar;
