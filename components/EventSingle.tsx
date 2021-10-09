import React from 'react';
import cn from '@utils/classnames';
import { EventI } from '@utils/infos';
import styles from './EventSingle.module.css';

const EventSingle = ({
  className = '',
  event,
  setActiveType,
}: {
  className?: string;
  event: EventI;
  setActiveType?: (str: string) => void;
}) => {
  return (
    <button
      onClick={() => {
        setActiveType(event.type);
        console.log('setFormValues', Object.entries(event.formValues));
      }}
      className={cn(className, styles.root)}
    >
      <p className={styles.type}>
        <b>{event.type}</b> <span>Min. {event.minute}</span>
      </p>
      <p className={styles.text}>{event.text}</p>
    </button>
  );
};

export default EventSingle;
