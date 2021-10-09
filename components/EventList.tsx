import React from 'react';
import EventSingle from '@comps/EventSingle';
import cn from '@utils/classnames';
import { EventI, EVENT_TYPES, TEAMS } from '@utils/infos';
import styles from './EventList.module.css';

const events: Array<EventI> = [
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 30,
    text: 'Schick für Mbabu',
    team: TEAMS.yb,
    formValues: {
      playerInIndex: 19,
      playerOutIndex: 43,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 33,
    text: 'Fassnacht (Sulejmani) 1:0',
    team: TEAMS.yb,
    formValues: {
      playerIndex: 16,
      homeScore: 1,
      awayScore: 0,
      awayTeam: TEAMS.basel,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 42,
    text: 'Sulejmani 2:0',
    team: TEAMS.yb,
    formValues: {
      playerIndex: 7,
      homeScore: 2,
      awayScore: 0,
      awayTeam: TEAMS.basel,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 52,
    text: 'Camara (Sulejmani) 3:0',
    team: TEAMS.yb,
    formValues: {
      playerIndex: 4,
      homeScore: 3,
      awayScore: 0,
      awayTeam: TEAMS.basel,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 60,
    text: 'Hoarau (Sanogo) 4:0',
    team: TEAMS.yb,
    formValues: {
      playerIndex: 99,
      homeScore: 4,
      awayScore: 0,
      awayTeam: TEAMS.basel,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 65,
    text: 'Bertone für Fassnacht',
    team: TEAMS.yb,
    formValues: {
      playerInIndex: 6,
      playerOutIndex: 16,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 67,
    text: 'Zuffi für Pululu',
    team: TEAMS.basel,
    formValues: {
      playerInIndex: 6,
      playerOutIndex: 37,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 70,
    text: 'Aebischer (Bertone) 5:0',
    team: TEAMS.yb,
    formValues: {
      playerIndex: 20,
      homeScore: 5,
      awayScore: 0,
      awayTeam: TEAMS.basel,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 71,
    text: 'Assalé für Sulejmani',
    team: TEAMS.yb,
    formValues: {
      playerInIndex: 17,
      playerOutIndex: 7,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 73,
    text: 'Bua für Okafor',
    team: TEAMS.yb,
    formValues: {
      playerInIndex: 33,
      playerOutIndex: 11,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 75,
    text: 'Van Wolfswinkel 5:1',
    team: TEAMS.basel,
    formValues: {
      playerIndex: 9,
      homeScore: 5,
      awayScore: 1,
      awayTeam: TEAMS.basel,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 80,
    text: 'Bertone (Schick) 6:1',
    team: TEAMS.yb,
    formValues: {
      playerIndex: 9,
      homeScore: 6,
      awayScore: 1,
      awayTeam: TEAMS.basel,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 73,
    text: 'Oberlin für Ajeti',
    team: TEAMS.basel,
    formValues: {
      playerInIndex: 19,
      playerOutIndex: 22,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 80,
    text: 'Assalé (Moumi Ngamaleu) 7:1',
    team: TEAMS.yb,
    formValues: {
      playerIndex: 17,
      homeScore: 7,
      awayScore: 1,
      awayTeam: TEAMS.basel,
    },
  },
];

const EventList = ({
  setActiveType,
  className = '',
}: {
  className?: string;
  setActiveType?: (str: string) => void;
}) => {
  return (
    <div className={cn(className, styles.root)}>
      <h3>YB - Basel 23.09.18</h3>
      <table>
        <tbody>
          <tr>
            <th>Spielort</th>
            <td>Stade de Suisse</td>
          </tr>
          <tr>
            <th>Zuschauer</th>
            <td>31120</td>
          </tr>
          <tr>
            <th>Schiedsrichter</th>
            <td>San</td>
          </tr>
        </tbody>
      </table>
      <div className={cn(styles.list)}>
        {events.map((event, i) => (
          <EventSingle
            setActiveType={setActiveType}
            key={i}
            event={event}
            className={styles.entry}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
