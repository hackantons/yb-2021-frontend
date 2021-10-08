import React from 'react';
import { PlayerPortrait } from './PlayerPortrait';
import { YELLOW } from './colors';

export const SubstitutionPanel: React.FC<{
  type: 'up' | 'down';
  height: number;
  slide: number;
  backgroundColor: string;
  playerNumber: number;
}> = ({ type, height, slide, backgroundColor, playerNumber }) => {
  const actualHeight = height * 0.8;
  const slideOffset = slide * actualHeight;
  return (
    <div
      style={{
        width: '100%',
        backgroundColor,
        display: 'flex',
        height,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <PlayerPortrait
        height={actualHeight}
        playerNumber={playerNumber}
        style={{ bottom: -slideOffset, position: 'absolute' }}
      ></PlayerPortrait>
    </div>
  );
};
