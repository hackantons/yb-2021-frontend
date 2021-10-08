import React, { useEffect, useState } from 'react';
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { interpolateAs } from 'next/dist/shared/lib/router/router';
import { isClientSide } from '@utils/helpers';
import { SlidingText } from './SlidingText';
import { YELLOW } from './colors';
import { useFont } from './use-font';

const player: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  right: '-5%',
};

export const Spieler: React.FC<{
  firstName: string;
  lastName: string;
  seasonGoal: number;
}> = ({ firstName, lastName, seasonGoal }) => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  useFont();

  const spr = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  const playerScale =
    interpolate(frame, [0, 50], [1.1, 1.15]) *
    interpolate(spr, [0, 1], [0.9, 1.05]);

  const opacity = interpolate(
    frame,
    [0, 10, durationInFrames - 10, durationInFrames - 1],
    [0, 1, 1, 0],
    {
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill>
      <Img
        style={{
          ...player,
          mixBlendMode: 'color-dodge',
          transform: `scale(${playerScale})`,
          transformOrigin: '75% 75%',
          filter: `drop-shadow(0 0 20px black)`,
          opacity,
        }}
        src="https://jonnyburger.s3.eu-central-1.amazonaws.com/fassnacht-removebg.png"
      ></Img>
      <Img
        style={{
          ...player,
          transform: `scale(${playerScale})`,
          transformOrigin: '75% 75%',
          opacity: opacity * 0.4,
        }}
        src="https://jonnyburger.s3.eu-central-1.amazonaws.com/fassnacht-removebg.png"
      ></Img>
      <SlidingText delay={0} fontSize={200} color="white" left={100} top={120}>
        {firstName}
      </SlidingText>
      <SlidingText delay={3} fontSize={200} color="white" left={100} top={320}>
        {lastName}
      </SlidingText>
      <SlidingText delay={6} fontSize={80} color={YELLOW} left={100} top={530}>
        {seasonGoal}. SAISONTOR
      </SlidingText>
    </AbsoluteFill>
  );
};
