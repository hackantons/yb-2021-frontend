import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  interpolateColors,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { ArrowUp } from './ArrowUp';
import { Background } from './Background';
import { PlayerPortrait } from './PlayerPortrait';
import { SubstitutionPanel } from './SubstitutionPanel';
import { Whirl } from './Whirl';
import { YELLOW } from './colors';

const transparent = interpolateColors(0, [0, 1], [YELLOW, 'transparent']);

export const Substitution: React.FC<{
  player1: number;
  player2: number;
}> = ({ player1, player2 }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const progressIn =
    spring({
      fps,
      frame: frame,
      config: {
        damping: 200,
        mass: 2,
      },
    }) * 0.5;

  const progressOut =
    spring({
      fps,
      frame: frame - 80,
      config: {
        damping: 200,
        mass: 2,
      },
    }) * 0.5;

  const { height } = useVideoConfig();

  const proportion = progressIn + progressOut;

  const firstBackgroundColor = interpolateColors(
    frame,
    [50, 60],
    [transparent, 'transparent']
  );
  const secondBackgroundColor = interpolateColors(
    frame,
    [50, 60],
    ['transparent', transparent]
  );

  return (
    <AbsoluteFill>
      <Background>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <SubstitutionPanel
            slide={0}
            backgroundColor={firstBackgroundColor}
            height={height * (1 - proportion)}
            type="up"
            playerNumber={player1}
          ></SubstitutionPanel>
          <SubstitutionPanel
            slide={0}
            backgroundColor={secondBackgroundColor}
            height={height * proportion}
            type="down"
            playerNumber={player2}
          ></SubstitutionPanel>
        </AbsoluteFill>
      </Background>
    </AbsoluteFill>
  );
};
