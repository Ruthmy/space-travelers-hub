import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, reservationToggle } from '../redux/missions/missionsSlice';

const MissionsList = () => {
  const missionsList = useSelector((state) => state.missions.list);
  const dispatch = useDispatch();

  function handleReservationToggle(missionID) {
    return dispatch(reservationToggle(missionID));
  }

  const missions = missionsList.map((mission) => (
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>{mission.reserved ? 'Active member' : 'Not a member'}</td>
      <td>
        <button
          type="button"
          className={mission.reserved ? 'mission__leave-mission-btn' : 'mission__join-mission-btn'}
          onClick={() => handleReservationToggle(mission.mission_id)}
        >
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  ));

  return missions;
};

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <section id="missions">
      <table id="missions__table">
        <thead>
          <tr className="table__row-header">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <MissionsList />
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
