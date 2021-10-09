import React from 'react';
import { AbsoluteFill, Img } from 'remotion';
import { TEAM_API } from '../../utils/infos';
import { YELLOW } from './colors';
import { useFont } from './use-font';

export const PlayerPortrait: React.FC<{
  style: React.CSSProperties;
  height: number;
  playerNumber: number;
}> = ({ style, height, playerNumber }) => {
  useFont();
  return (
    <AbsoluteFill
      style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}
    >
      <div
        style={{
          ...style,
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Img
          src={TEAM_API[playerNumber].assets.portrait}
          style={{
            height,
          }}
        ></Img>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: YELLOW,
              fontSize: 60,
              padding: '10px 8px',
              fontFamily: 'YB',
              display: 'inline-block',
              textAlign: 'center',
            }}
          >
            <span style={{ color: 'white' }}>{playerNumber}</span>{' '}
            {TEAM_API[playerNumber].lastName.toUpperCase()}
          </div>
        </AbsoluteFill>
      </div>
    </AbsoluteFill>
  );
};
