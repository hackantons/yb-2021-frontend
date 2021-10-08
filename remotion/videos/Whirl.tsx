import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Stroke } from './Stroke';

export const Whirl: React.FC = () => {
  const { width, height, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  const rotation = interpolate(frame, [0, durationInFrames], [0, Math.PI]);
  const size = Math.sqrt(width * width + height * height);
  const opacity = interpolate(
    frame,
    [0, 10, durationInFrames - 30, durationInFrames - 1],
    [0, 1, 1, 0]
  );
  return (
    <AbsoluteFill
      style={{
        width: size,
        height: size,
        opacity,
        transform: `translateY(${(height - size) / 2}px) translateX(${
          (width - size) / 2
        }px) rotate(${rotation}rad)`,
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {new Array(1000).fill(1).map((key, i) => {
          return <Stroke key={i} seed={i} />;
        })}
      </svg>
    </AbsoluteFill>
  );
};
