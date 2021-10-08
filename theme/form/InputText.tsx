import React from 'react';
import cn from '@utils/classnames';
import inputStyles from './Input.module.css';

const InputText = ({
  name,
  value = '',
  className = '',
  type = 'text',
  ...props
}: {
  name: string;
  value?: string;
  className?: string;
  type?:
    | 'text'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url'
    | 'week';
}) => (
  <input
    name={name}
    className={cn(className, inputStyles.input)}
    id={name}
    value={value}
    type={type}
    {...props}
  />
);

export default InputText;
