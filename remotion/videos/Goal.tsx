import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from './Background';
import { Spieler } from './Spieler';

export const Goal: React.FC = () => {
  return (
    <Background>
      <Spieler></Spieler>
    </Background>
  );
};
