import React from 'react';
import { useController } from 'react-hook-form';
import cn from '../../utils/classnames';
import styles from './FormElement.module.css';

const FormElement = ({
  form,
  label,
  name,
  rules = {},
  Input,
  Description,
  className = '',
  inputClassName = '',
  sanitizeValue = (value) => value,
  stacked = false,
  ...inputProps
}: {
  form?: any;
  label?: string;
  name: string;
  rules?: any;
  Input?: any;
  Description?: any;
  className?: string;
  inputClassName?: string;
  sanitizeValue?: Function;
  stacked?: boolean;
  min?: number;
  max?: number;
  [key: string]: any;
}) => {
  const { field } = useController({
    control: form.control,
    name,
    rules,
  });

  const error = React.useMemo(
    () => (form?.errors ? form?.errors[name] : null),
    [form, name]
  );

  return (
    <div
      className={cn(styles.container, className, {
        [styles.containerStacked]: stacked,
      })}
    >
      <div className={styles.labelContainer}>
        <label htmlFor={name} className={styles.label}>
          {label}
          {'required' in rules && '*'}
        </label>
        {Description && <div className={styles.description}>{Description}</div>}
      </div>
      <div className={styles.content}>
        <Input
          name={name}
          className={cn(styles.input, inputClassName)}
          {...field}
          {...inputProps}
          onBlur={(e) => e && field.onChange(sanitizeValue(e.target.value))}
        />
        {error && <p className={styles.error}>{error.message}</p>}
      </div>
    </div>
  );
};

export default FormElement;
