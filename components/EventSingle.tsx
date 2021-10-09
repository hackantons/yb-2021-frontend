import React from 'react';
import cn from '@utils/classnames';
import { EventI } from '@utils/infos';
import styles from './EventSingle.module.css';

export const UPDATE_FORM_EVENT = 'UPDATE_FORM';

const EventSingle = ({
  className = '',
  event,
  setActiveType,
  setDefaultValues,
}: {
  className?: string;
  event: EventI;
  setActiveType?: (str: string) => void;
  setDefaultValues?: (str: Object) => void;
}) => {
  const active = Object.keys(event.formValues).length !== 0;

  return (
    <button
      onClick={() => {
        if (active) {
          setActiveType(event.type);
          setDefaultValues(event.formValues);
        }
      }}
      className={cn(className, styles.root, {
        [styles.rootActive]: active,
      })}
    >
      <p className={styles.type}>
        <b>{event.type}</b> <span>Min. {event.minute}</span>
      </p>
      <p className={styles.text}>{event.text}</p>
    </button>
  );
};

export default EventSingle;
