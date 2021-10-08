import React, { Children } from 'react';
import { AbsoluteFill } from 'remotion';
import { Publikum } from './Publikum';
import { Spieler } from './Spieler';
import texture from './texture.jpg';

const container: React.CSSProperties = {
  backgroundColor: '#222',
};

const background: React.CSSProperties = {
  backgroundImage: `url(${texture})`,
  opacity: 0.12,
};

export const Background: React.FC<{}> = ({ children }) => {
  return (
    <AbsoluteFill style={container}>
      <AbsoluteFill style={background}></AbsoluteFill>
      <Publikum></Publikum>

      <AbsoluteFill>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};
