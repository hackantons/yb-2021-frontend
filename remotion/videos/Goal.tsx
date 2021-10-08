import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from './Background';
import { Spieler } from './Spieler';

export const Goal: React.FC<{
  firstName: string;
  lastName: string;
  seasonGoal: number;
}> = ({ firstName, lastName, seasonGoal }) => {
  return (
    <Background>
      <Spieler
        firstName={firstName}
        lastName={lastName}
        seasonGoal={seasonGoal}
      />
    </Background>
  );
};
