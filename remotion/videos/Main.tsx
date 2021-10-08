import React from 'react';
import { Series } from 'remotion';
import { Goal } from './Goal';
import { Score } from './Score';

export const Main: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={50}>
        <Score></Score>
      </Series.Sequence>
      <Series.Sequence durationInFrames={50}>
        <Goal></Goal>
      </Series.Sequence>
    </Series>
  );
};
