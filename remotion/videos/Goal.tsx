import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from './Background';
import { Spieler } from './Spieler';

export const Goal: React.FC = () => {
  return (
    <Background>
      <Spieler>
        <h1 style={{ color: 'white', fontFamily: 'YB' }}>YB</h1>
      </Spieler>
    </Background>
  );
};
