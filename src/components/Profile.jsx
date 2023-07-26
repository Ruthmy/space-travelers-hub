import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/Profile.css';

const Profile = () => {
  // Get rockets from Redux store:
  const rocketsList = useSelector((state) => state.rockets);

  return (
    <div className="profile">
      <h1>My Profile</h1>
      <div className="profile-container">
        <div className="profile-info">
          <h2>My Missions</h2>
          <ul>
            <li>SpaceX CRS-2</li>
            <li>SpaceX CRS-3</li>
            <li>SpaceX CRS-4</li>
            <li>SpaceX CRS-5</li>
            <li>SpaceX CRS-6</li>
            <li>SpaceX CRS-7</li>
            <li>SpaceX CRS-8</li>
            <li>SpaceX CRS-9</li>
            <li>SpaceX CRS-10</li>
          </ul>
        </div>
        <div className="profile-info">
          <h2>My Rockets</h2>
          <ul>
            {rocketsList.rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link to="/" className="btn btn-primary">Back</Link>
    </div>
  );
};

export default Profile;
