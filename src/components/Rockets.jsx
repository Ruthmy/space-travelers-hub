import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRockets } from '../redux/rockets/rocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  // Get books from Redux store:
  const rocketsList = useSelector((state) => state.rockets);
  // For fetch the list, the side effects and re renders
  useEffect(() => { dispatch(fetchRockets()); }, [dispatch]);

  return (
    <section className="rockets d-flex-column">
      <div className="rockets__container d-flex-column">

        {rocketsList.rockets.length === 0
          ? <h2>Loading info...</h2>
          : rocketsList.rockets.map((rocket) => (
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
