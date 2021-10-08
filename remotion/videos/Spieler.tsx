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
import fassnacht from './fassnacht-removebg.png';
import { useFont } from './use-font';

const player: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  right: '-5%',
};

export const Spieler: React.FC = () => {
  const { fps } = useVideoConfig();
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

  return (
    <AbsoluteFill>
      <Img
        style={{
          ...player,
          mixBlendMode: 'color-dodge',
          transform: `scale(${playerScale})`,
          transformOrigin: '75% 75%',
        }}
        // @ts-ignore
        src={fassnacht}
      ></Img>
      <Img
        style={{
          ...player,
          opacity: 0.4,
          transform: `scale(${playerScale})`,
          transformOrigin: '75% 75%',
        }}
        // @ts-ignore

        src={fassnacht}
      ></Img>
      <SlidingText delay={0} fontSize={200} color="white" left={100} top={120}>
        CHRISTIAN
      </SlidingText>
      <SlidingText delay={3} fontSize={200} color="white" left={100} top={320}>
        FASSNACHT
      </SlidingText>
      <SlidingText delay={6} fontSize={80} color="#ffcf00" left={100} top={530}>
        10. SAISONTOR
      </SlidingText>
    </AbsoluteFill>
  );
};
