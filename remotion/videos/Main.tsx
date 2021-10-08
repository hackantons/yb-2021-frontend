import React from 'react';
import { Series } from 'remotion';
import { Goal } from './Goal';
import { Minute } from './Minute';
import { Score } from './Score';

export const Main: React.FC<{
  firstName: string;
  lastName: string;
  seasonGoal: number;
  minute: number;
}> = ({ firstName, lastName, seasonGoal, minute }) => {
  return (
    <Series>
      <Series.Sequence durationInFrames={20}>
        <Minute minute={minute}></Minute>
      </Series.Sequence>
      <Series.Sequence durationInFrames={40}>
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
