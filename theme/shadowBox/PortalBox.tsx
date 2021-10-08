import React from 'react';
import ReactDOM from 'react-dom';
import { isClientSide } from '@utils/helpers';
import { ShadowBox } from '../index';

let element = isClientSide() ? document.querySelector('#shadowbox') : null;
if (!element && isClientSide()) {
  element = document.createElement('div');
  element.setAttribute('id', '#shadowbox');
}

const Portal = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[] | string;
  //@ts-ignore
}) => ReactDOM.createPortal(children, element);

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
