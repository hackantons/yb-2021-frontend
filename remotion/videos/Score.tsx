import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Background } from './Background';
import splash from './splash.png';
import { useFont } from './use-font';

export const Score: React.FC = () => {
  useFont();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress =
    spring({
      fps,
      frame,
      config: {
        mass: 0.3,
        damping: 200,
      },
    }) +
    frame / 1000;
  const scale = interpolate(progress, [0, 1], [10, 1]);
  const offset = interpolate(progress, [0, 1], [-216, 0]);
  return (
    <Background>
      <AbsoluteFill
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Img
          src={splash}
          style={{
            mixBlendMode: 'soft-light',
            position: 'absolute',
            transform: `scale(${progress})`,
          }}
        />
        <h1
          style={{
            fontSize: 200,
            color: 'white',
            fontFamily: 'YB',
            transform: `scale(${scale})`,
            position: 'relative',
            marginLeft: offset,
          }}
        >
          {'GOOOOOOAL'}
        </h1>
      </AbsoluteFill>
    </Background>
  );
};
