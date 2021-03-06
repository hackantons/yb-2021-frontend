import React from 'react';
import { IconType } from '@theme';
import cn from '@utils/classnames';
import styles from './Icon.module.css';
import SVG from './SVG';

const Icon = ({
  icon,
  className = '',
  spinning = false,
  rotate = false,
  button = false,
  round = false,
  circle = false,
  ...props
}: {
  icon: IconType;
  className?: string;
  rotate?: 90 | 180 | 270 | false;
  spinning?: boolean;
  button?: boolean;
  round?: boolean;
  circle?: boolean;
  [key: string]: any;
}) => {
  return (
    <SVG
      className={cn(className, styles.root, {
        [styles[`rotate-${rotate}`]]: rotate !== false,
        [styles.animationSpin]: spinning,
        [styles.isRound]: round,
        [styles.circle]: circle,
      })}
      icon={icon}
      {...props}
    />
  );
};

export default Icon;
