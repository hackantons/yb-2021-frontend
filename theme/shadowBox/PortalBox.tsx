import React from 'react';
import ReactDOM from 'react-dom';
import { isClientSide } from '@utils/helpers';
import { ShadowBox } from '../index';

const Portal = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[] | string;
  //@ts-ignore
}) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? ReactDOM.createPortal(children, document.querySelector('#shadowbox'))
    : null;
};

const PortalBox = ({
  children,
  close,
  size,
  ...props
}: {
  children?: JSX.Element | JSX.Element[] | string;
  close: Function;
  size?: 'large' | 'small';
  [key: string]: any;
}) => (
  <Portal>
    <ShadowBox close={close} size={size} {...props}>
      {children}
    </ShadowBox>
  </Portal>
);

export default PortalBox;
