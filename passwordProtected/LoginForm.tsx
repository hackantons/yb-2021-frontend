import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControls, FormElement, InputText, FormError } from '@theme';
import cn from '@utils/classnames';
import styles from './LoginForm.module.css';
import { usePasswordProtected } from './PasswordProtectedProvider';

const LoginForm = ({ className = '' }: { className?: string }) => {
  const [error, setError] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const form = useForm<{ password: string }>({
    defaultValues: { password: '' },
  });
  const { doLogin } = usePasswordProtected();

  return (
    <Form
      className={cn(className, styles.root)}
      onSubmit={form.handleSubmit(({ password }) => {
        setLoading(true);
        doLogin(password)
          .then(() => {})
          .catch((e) => setError(e))
          .finally(() => setLoading(false));
      })}
    >
      <FormElement
        name="password"
        label="Password"
        Input={InputText}
        form={form}
        type="password"
      />
      {error !== '' && <FormError>{error}</FormError>}
      <FormControls align="right" loading={loading} value="Login" />
    </Form>
  );
};

export default LoginForm;
