import React from 'react';
import EventSingle from '@comps/EventSingle';
import cn from '@utils/classnames';
import { EventI, EVENT_TYPES, Teams } from '@utils/infos';
import styles from './EventList.module.css';

const events: Array<EventI> = [
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 12,
    text: 'Tor für BSCYB von Nico Maier',
    team: 'YB',
    payload: {
      playerIndex: 2,
      minute: 30,
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
    team: 'YB',
    payload: {
      playerInIndex: 4,
      playerOutIndex: 3,
      minute: 30,
    },
  },
  {
    timestamp: 1633719388,
    type: EVENT_TYPES.CHANGE,
    minute: 30,
    text: 'Christian Fasnacht kommt für Michel Aebischer',
    team: 'YB',
    payload: {
      playerInIndex: 4,
      playerOutIndex: 3,
      minute: 30,
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
