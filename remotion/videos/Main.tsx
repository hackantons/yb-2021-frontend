import React from 'react';
import { Series } from 'remotion';
import { Sponsors, Teams } from '../../utils/infos';
import { Goal } from './Goal';
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
  awayTeam: Teams;
  sponsor: Sponsors;
}> = ({
  firstName,
  lastName,
  seasonGoal,
  minute,
  awayScore,
  awayTeam,
  homeScore,
  sponsor,
}) => {
  return (
    <Series>
      <Series.Sequence durationInFrames={20}>
        <Minute minute={minute}></Minute>
      </Series.Sequence>
      <Series.Sequence durationInFrames={50}>
        <Score></Score>
      </Series.Sequence>
      <Series.Sequence durationInFrames={65}>
        <Goal
          firstName={firstName}
          lastName={lastName}
          seasonGoal={seasonGoal}
        ></Goal>
      </Series.Sequence>
      <Series.Sequence durationInFrames={65}>
        <NewScore
          awayScore={awayScore}
          awayTeam={awayTeam}
          homeScore={homeScore}
          sponsor={sponsor}
        ></NewScore>
      </Series.Sequence>
    </Series>
  );
};
