import React from 'react';
import { Series } from 'remotion';
import { SevenTwentyPScaler } from './1080pScaler';
import { Goal } from './Goal';
import { MainComp } from './MainComp';
import { Minute } from './Minute';
import { NewScore } from './NewScore';
import { Score } from './Score';

export const Main: React.FC<{
  firstName: string;
  lastName: string;
  seasonGoal: number;
  minute: number;
  awayScore: number;
  homeScore: number;
  awayTeam: string;
  sponsor: string;
  portraitAction: string;
  playerNumber: number;
}> = (props) => {
  return (
    <SevenTwentyPScaler>
      <MainComp {...props}></MainComp>
    </SevenTwentyPScaler>
  );
};
