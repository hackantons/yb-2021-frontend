import React from 'react';
import {
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const player: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  right: '-5%',
};

export const DefaultSpieler: React.FC = () => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

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
    <>
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
    </>
  );
};
