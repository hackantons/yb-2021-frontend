import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from './Background';
import { Spieler } from './Spieler';

export const Goal: React.FC<{
  firstName: string;
  lastName: string;
  playerNumber: number;
  seasonGoal: number;
}> = ({ firstName, lastName, playerNumber, seasonGoal }) => {
  return (
    <Background>
      <Spieler
        firstName={firstName}
        lastName={lastName}
        seasonGoal={seasonGoal}
        playerNumber={playerNumber}
      />
    </Background>
  );
};
