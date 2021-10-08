import React from 'react';
import { AbsoluteFill, Img } from 'remotion';
import { Teams } from '../../utils/infos';
import { Background } from './Background';
import { TeamLogo } from './TeamLogo';

const container: React.CSSProperties = {
  width: 120,
  display: 'block',
  textAlign: 'center',
};

export const NewScore: React.FC = () => {
  return (
    <Background>
      <AbsoluteFill
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            color: 'white',
            fontFamily: 'YB',
            fontSize: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TeamLogo
            team={Teams.YB}
            src="https://jonnyburger.s3.eu-central-1.amazonaws.com/team-zurich.png"
          />
          <div style={{ width: 30 }} />
          <div style={container}>1</div>
          <div style={container}>-</div>
          <div style={container}>0</div>
          <div style={{ width: 30 }} />
          <TeamLogo
            team={Teams.YB}
            src="https://jonnyburger.s3.eu-central-1.amazonaws.com/team-zurich.png"
          />
        </div>
      </AbsoluteFill>
    </Background>
  );
};
