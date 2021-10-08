import React from 'react';
import {
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Background } from './Background';

const player: React.CSSProperties = {
  position: 'absolute',
  right: '25%',
  bottom: '-10%',
};

export const Jana: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const spr = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  const src = [
    'https://jonnyburger.s3.eu-central-1.amazonaws.com/jana/1.png',
    'https://jonnyburger.s3.eu-central-1.amazonaws.com/jana/2.png',
    'https://jonnyburger.s3.eu-central-1.amazonaws.com/jana/3.png',
    'https://jonnyburger.s3.eu-central-1.amazonaws.com/jana/4.png',
  ][Math.min(3, Math.floor(frame / 15))];

  const playerScale =
    interpolate(frame, [0, 50], [1.1, 1.15]) *
    interpolate(spr, [0, 1], [0.9, 1.05]) *
    1.8;

  return (
    <>
      <Background>
        <Img
          style={{
            ...player,
            mixBlendMode: 'color-dodge',
            transform: `scale(${playerScale})`,
            transformOrigin: '75% 75%',
          }}
          // @ts-ignore
          src={src}
        ></Img>
        <Img
          style={{
            ...player,
            opacity: 0.1,
            transform: `scale(${playerScale})`,
            transformOrigin: '75% 75%',
          }}
          // @ts-ignore

          src={src}
        ></Img>
      </Background>
    </>
  );
};
