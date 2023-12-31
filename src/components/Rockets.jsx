import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cancelReservation, reserveRocket } from '../redux/rockets/rocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  // Get rockets from Redux store:
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
                <p>
                  {rocket.reserved && <span className="rockets__badge">Reserved</span>}
                  {rocket.description}
                </p>
                <button
                  type="button"
                  className={rocket.reserved ? 'rockets__cancel-btn' : 'rockets__reserve-btn'}
                  onClick={() => {
                    dispatch(rocket.reserved
                      ? cancelReservation(rocket.id)
                      : reserveRocket(rocket.id));
                  }}
                >
                  {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                </button>
              </div>
            </li>
          ))}

      </div>
    </section>
  );
};

export default Rockets;
