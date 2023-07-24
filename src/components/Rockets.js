import React from 'react';
import { Link } from 'react-router-dom';

const Rockets = () => (
  <section className="rockets-list">
    <h2>Rockets</h2>
    <ul>
      <li>
        <img src="" alt="" />
        <div>
          <h3>Rocket Name</h3>
          <p>Rocket description</p>
          <Link to="/rockets/:rocket_id">Reserve Rocket</Link>
        </div>
      </li>
    </ul>
  </section>
);

export default Rockets;
