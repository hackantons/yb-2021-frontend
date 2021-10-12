import React from 'react';
import cn from '@utils/classnames';
import styles from '../svg/SVG.module.css';
import Icon from './badge-1platz.svg';

const Badge2021 = ({
  className = '',
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  return (
    <figure className={cn(className, styles.root)} {...props}>
      <Icon />
    </figure>
  );
};

export default Badge2021;
