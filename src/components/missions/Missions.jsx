import { list } from '../../redux/missions/missionsList';

const MissionsList = () => {
  const missions = [...list];
  console.log(missions);
  missions.map((mission) => {
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>{(mission.membership = false)}</td>
      <td>
        <button type="button" className={(mission.joinMission = false)}>
          Join Mission
        </button>
      </td>
    </tr>;
  });
  return <tr />;
};

const Missions = () => (
  <section id="missions">
    <table id="missions__table">
      <tr className="table__row-header">
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th> </th>
      </tr>
      <MissionsList />
    </table>
  </section>
);

export default Missions;
