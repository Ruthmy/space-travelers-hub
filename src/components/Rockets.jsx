import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cancelReservation, reserveRocket } from '../redux/rockets/rocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  // Get books from Redux store:
  const rocketsList = useSelector((state) => state.rockets);

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
                <button
                  type="button"
                  className={rocket.reserved ? 'cancel' : 'reserve'}
                  onClick={() => {
                    dispatch(rocket.reserved
                      ? cancelReservation(rocket.id)
                      : reserveRocket(rocket.id));
                  }}
                >
                  {rocket.reserved && 'Cancel Reservation'}
                  {!rocket.reserved && 'Reserve Rocket'}
                </button>
              </div>
            </li>
          ))}

      </div>
    </section>
  );
};

export default Rockets;
