import React from 'react';
import { Series } from 'remotion';
import { Goal } from './Goal';
import { Score } from './Score';

export const Main: React.FC<{
  firstName: string;
  lastName: string;
  seasonGoal: number;
}> = ({ firstName, lastName, seasonGoal }) => {
  return (
    <Series>
      <Series.Sequence durationInFrames={50}>
        <Score></Score>
      </Series.Sequence>
      <Series.Sequence durationInFrames={50}>
        <Goal
          firstName={firstName}
          lastName={lastName}
          seasonGoal={seasonGoal}
        ></Goal>
      </Series.Sequence>
    </Series>
  );
};
