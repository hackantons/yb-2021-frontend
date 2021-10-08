import React from 'react';
import EventSingle from '@comps/EventSingle';
import cn from '@utils/classnames';
import { EventI, EVENT_TYPES, Teams } from '@utils/infos';
import styles from './EventList.module.css';

const test = [
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 12,
    text: 'Tor für BSCYB von Nico Maier',
    team: Teams.YB,
    payload: {
      playerIndex: 2,
      homeScore: 7,
      awayScore: 2,
      awayTeam: Teams.BASEL,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 55,
    text: 'Christian Fasnacht kommt für Michel Aebischer',
    team: Teams.YB,
    payload: {
      playerInIndex: 4,
      playerOutIndex: 3,
    },
  },
];

const events: Array<EventI> = [
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 30,
    text: 'Schick für Mbabu',
    team: Teams.YB,
    payload: {
      playerInIndex: 19,
      playerOutIndex: 43,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 33,
    text: 'Fassnacht (Sulejmani) 1:0',
    team: Teams.YB,
    payload: {
      playerIndex: 16,
      homeScore: 1,
      awayScore: 0,
      awayTeam: Teams.BASEL,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 42,
    text: 'Sulejmani 2:0',
    team: Teams.YB,
    payload: {
      playerIndex: 7,
      homeScore: 2,
      awayScore: 0,
      awayTeam: Teams.BASEL,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 52,
    text: 'Camara (Sulejmani) 3:0',
    team: Teams.YB,
    payload: {
      playerIndex: 4,
      homeScore: 3,
      awayScore: 0,
      awayTeam: Teams.BASEL,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 60,
    text: 'Hoarau (Sanogo) 4:0',
    team: Teams.YB,
    payload: {
      playerIndex: 99,
      homeScore: 4,
      awayScore: 0,
      awayTeam: Teams.BASEL,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 65,
    text: 'Bertone für Fassnacht',
    team: Teams.YB,
    payload: {
      playerInIndex: 6,
      playerOutIndex: 16,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 67,
    text: 'Zuffi für Pululu',
    team: Teams.BASEL,
    payload: {
      playerInIndex: 6,
      playerOutIndex: 37,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 70,
    text: 'Aebischer (Bertone) 5:0',
    team: Teams.YB,
    payload: {
      playerIndex: 20,
      homeScore: 5,
      awayScore: 0,
      awayTeam: Teams.BASEL,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 71,
    text: 'Assalé für Sulejmani',
    team: Teams.YB,
    payload: {
      playerInIndex: 17,
      playerOutIndex: 7,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 73,
    text: 'Bua für Okafor',
    team: Teams.YB,
    payload: {
      playerInIndex: 33,
      playerOutIndex: 11,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 75,
    text: 'Van Wolfswinkel 5:1',
    team: Teams.BASEL,
    payload: {
      playerIndex: 9,
      homeScore: 5,
      awayScore: 1,
      awayTeam: Teams.BASEL,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 80,
    text: 'Bertone (Schick) 6:1',
    team: Teams.YB,
    payload: {
      playerIndex: 9,
      homeScore: 6,
      awayScore: 1,
      awayTeam: Teams.BASEL,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 73,
    text: 'Oberlin für Ajeti',
    team: Teams.BASEL,
    payload: {
      playerInIndex: 19,
      playerOutIndex: 22,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 80,
    text: 'Assalé (Moumi Ngamaleu) 7:1',
    team: Teams.YB,
    payload: {
      playerIndex: 17,
      homeScore: 7,
      awayScore: 1,
      awayTeam: Teams.BASEL,
    },
  },
];

const EventList = ({ className = '' }: { className?: string }) => {
  return (
    <div className={cn(className, styles.root)}>
      <h3>YB Basel 23.09.18</h3>
      <table>
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
      </table>
      <div className={cn(styles.list)}>
        {events.map((event, i) => (
          <EventSingle key={i} event={event} className={styles.entry} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
