import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/Profile.css';

const Profile = () => {
  // Get rockets from Redux store:
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  function missionsList() {
    const missionList = missions.list.filter((mission) => mission.reserved === true);

    if (missionList.length) {
      return missionList.map((mission) => (
        <tr key={mission.mission_id}>
          <td>{mission.mission_name}</td>
        </tr>
      ));
    }

    return (
      <tr>
        <td style={{ margin: 'auto' }}>
          <i>No missions joined yet</i>
        </td>
      </tr>
    );
  }

  function rocketsList() {
    const rocketsList = rockets.rockets.filter((rocket) => rocket.reserved === true);

    if (rocketsList.length) {
      return rocketsList.map((rocket) => (
        <tr key={rocket.id}>
          <td>{rocket.name}</td>
        </tr>
      ));
    }

    return (
      <tr>
        <td style={{ margin: 'auto' }}>
          <i>No rockets reserved yet</i>
        </td>
      </tr>
    );
  }
  return (
    <section className="profile">
      <table className="profile__info">
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>{missionsList()}</tbody>
      </table>
      <table className="profile__info">
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody>{rocketsList()}</tbody>
      </table>
    </section>
  );
};

export default Profile;
