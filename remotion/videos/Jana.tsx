import React from 'react';
import {
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Background } from './Background';
import jana1 from './res/jana/1.png';
import jana2 from './res/jana/2.png';
import jana3 from './res/jana/3.png';
import jana4 from './res/jana/4.png';
import jana5 from './res/jana/5.png';

const player: React.CSSProperties = {
  position: 'absolute',
  right: '10%',
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

  const src = [jana1, jana2, jana3, jana4][Math.min(3, Math.floor(frame / 15))];

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
