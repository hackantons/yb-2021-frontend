import React from 'react';
import EventSingle from '@comps/EventSingle';
import cn from '@utils/classnames';
import { events } from '@utils/infos';
import styles from './EventList.module.css';

const EventList = ({ className = '' }: { className?: string }) => {
  return (
    <div className={cn(className, styles.root)}>
      {events.map((event, i) => (
        <EventSingle key={i} event={event} className={styles.entry} />
      ))}
    </div>
  );
};

export default EventList;
