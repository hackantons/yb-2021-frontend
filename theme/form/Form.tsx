import React from 'react';
import cn from '@utils/classnames';

const Form = ({
  className = '',
  children,
  onSubmit,
}: {
  className?: string;
  children?: any;
  onSubmit: Function;
}) => (
  <form className={cn(className)} onSubmit={(data) => onSubmit(data)}>
    {children}
  </form>
);

export default Form;
