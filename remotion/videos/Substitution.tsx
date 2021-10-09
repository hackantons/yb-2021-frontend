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

const delay = 30;

export const Substitution: React.FC<{
  player1: number;
  player2: number;
}> = ({ player1, player2 }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const progressIn =
    spring({
      fps,
      frame: frame - delay,
      config: {
        damping: 200,
        mass: 1,
      },
    }) * 0.5;

  const progressOut =
    spring({
      fps,
      frame: frame - 80 - delay,
      config: {
        damping: 200,
        mass: 1,
      },
    }) * 0.5;

  const { height } = useVideoConfig();

  const proportion = progressIn + progressOut;

  const firstOpacity = interpolate(frame, [50 + delay, 60 + delay], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const secondOpacity = 1 - firstOpacity;

  const firstBackgroundColor = interpolateColors(
    firstOpacity,
    [0, 1],
    ['transparent', transparent]
  );
  const secondBackgroundColor = interpolateColors(
    secondOpacity,
    [0, 1],
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
            opacity={firstOpacity}
          ></SubstitutionPanel>
          <SubstitutionPanel
            slide={0}
            backgroundColor={secondBackgroundColor}
            height={height * proportion}
            type="down"
            playerNumber={player2}
            opacity={secondOpacity}
          ></SubstitutionPanel>
        </AbsoluteFill>
      </Background>
    </AbsoluteFill>
  );
};