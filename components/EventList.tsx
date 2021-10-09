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
    team: 'yb',
    formValues: {
      //minute: 30,
      //player2: 19,
      //player1: 43,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 33,
    text: 'Fassnacht (Sulejmani) 1:0',
    team: 'yb',
    formValues: {
      minute: 33,
      playerIndex: 16,
      homeScore: 1,
      awayScore: 0,
      awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 42,
    text: 'Sulejmani 2:0',
    team: 'yb',
    formValues: {
      //minute: 42,
      //playerIndex: 7,
      //homeScore: 2,
      //awayScore: 0,
      //awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 52,
    text: 'Camara (Sulejmani) 3:0',
    team: 'yb',
    formValues: {
      //minute: 52,
      //playerIndex: 4,
      //homeScore: 3,
      //awayScore: 0,
      //awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 60,
    text: 'Hoarau (Sanogo) 4:0',
    team: 'yb',
    formValues: {
      //minute: 60,
      //playerIndex: 99,
      //homeScore: 4,
      //awayScore: 0,
      //awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 65,
    text: 'Bertone für Fassnacht',
    team: 'yb',
    formValues: {
      minute: 65,
      //player2: 6, workaroud weil wir bertone nicht haben
      player2: 30,
      player1: 16,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 67,
    text: 'Zuffi für Pululu',
    team: 'basel',
    formValues: {
      //minute: 67,
      //player2: 6,
      //player1: 37,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 70,
    text: 'Aebischer (Bertone) 5:0',
    team: 'yb',
    formValues: {
      minute: 70,
      playerIndex: 20,
      homeScore: 5,
      awayScore: 0,
      awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 71,
    text: 'Assalé für Sulejmani',
    team: 'yb',
    formValues: {
      //minute: 71,
      //player2: 17,
      //player1: 7,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 73,
    text: 'Bua für Okafor',
    team: 'basel',
    formValues: {
      //minute: 73,
      //player2: 33,
      //player1: 11,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 75,
    text: 'Van Wolfswinkel 5:1',
    team: 'basel',
    formValues: {
      //minute: 75,
      //playerIndex: 9,
      //homeScore: 5,
      //awayScore: 1,
      //awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 80,
    text: 'Bertone (Schick) 6:1',
    team: 'yb',
    formValues: {
      minute: 80,
      //playerIndex: 6, workaroud weil wir bertone nicht haben
      playerIndex: 30,
      homeScore: 6,
      awayScore: 1,
      awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 86,
    text: 'Oberlin für Ajeti',
    team: 'basel',
    formValues: {
      //minute: 86,
      //player2: 19,
      //player1: 22,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 89,
    text: 'Assalé (Moumi Ngamaleu) 7:1',
    team: 'yb',
    formValues: {
      //minute: 89,
      //playerIndex: 17,
      //homeScore: 7,
      //awayScore: 1,
      //awayTeam: 'basel',
    },
  },
];

const EventList = ({
  setActiveType,
  className = '',
  setDefaultValues,
}: {
  className?: string;
  setActiveType?: (str: string) => void;
  setDefaultValues?: (str: Object) => void;
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
            setDefaultValues={setDefaultValues}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
