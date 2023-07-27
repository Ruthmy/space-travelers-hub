import { useDispatch, useSelector } from 'react-redux';
import { reservationToggle } from '../redux/missions/missionsSlice';

import '../styles/Missions.css';

const MissionsList = () => {
  const missionsList = useSelector((state) => state.missions.list);
  const dispatch = useDispatch();

  function handleReservationToggle(missionID) {
    return dispatch(reservationToggle(missionID));
  }

  let switchBgColor = true;

  const missions = missionsList.map((mission) => {
    switchBgColor = !switchBgColor;
    return (
      <tr key={mission.mission_id} className={switchBgColor ? 'bg-white' : 'bg-grey'}>
        <td className="mission-name">{mission.mission_name}</td>
        <td className="mission-description">{mission.description}</td>
        <td className="mission-status">
          <span className={mission.reserved ? 'active-member-badge' : 'not-member-badge'}>
            {mission.reserved ? 'Active member' : 'Not a member'}
          </span>
        </td>
        <td className="mission-reserve">
          <button
            type="button"
            className={
              mission.reserved ? 'mission__leave-mission-btn' : 'mission__join-mission-btn'
            }
            onClick={() => handleReservationToggle(mission.mission_id)}
          >
            {mission.reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </td>
      </tr>
    );
  });

  return missions;
};

const Missions = () => (
  <section id="missions">
    <table id="missions__table">
      <thead>
        <tr className="table__row-header bg-white">
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

export default Missions;
