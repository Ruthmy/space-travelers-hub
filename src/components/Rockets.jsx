/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRockets } from '../redux/rockets/rocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  // Get books from Redux store:
  const rocketsList = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <section className="rockets d-flex-column">
      <h2>Rockets</h2>
      {/* {rocketsList.loading && <div>Loading...</div>}
      {rocketsList.error && <div>{rocketsList.error}</div>} */}
      <div className="rockets__container d-flex-column">

        {rocketsList.rockets.map((rocket) => (
          <li key={rocket.id} className="rockets__list d-flex-row">
            <img src={rocket.flickr_images[0]} alt={rocket.name} />
            <div className="rockets__info d-flex-column">
              <h3>{rocket.name}</h3>
              <p>{rocket.description}</p>
              <button type="button">Reserve Rocket</button>
            </div>
          </li>
        ))}

      </div>
    </section>
  );
};

export default Rockets;
