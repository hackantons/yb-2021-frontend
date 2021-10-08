import { Composition } from 'remotion';
import { Teams } from '../utils/infos';
import { Goal } from './videos/Goal';
import { Jana } from './videos/Jana';
import { Main } from './videos/Main';
import { Minute } from './videos/Minute';
import { NewScore } from './videos/NewScore';
import { Score } from './videos/Score';

export const Video = () => {
  return (
    <>
      <Composition
        id="Goal"
        height={1920}
        width={1080}
        component={Main}
        durationInFrames={300}
        fps={30}
        defaultProps={{
          firstName: 'Christian',
          lastName: 'Fassnacht',
          seasonGoal: 10,
          minute: 10,
        }}
      ></Composition>
      <Composition
        id="Player"
        height={1920}
        width={1080}
        component={Goal}
        durationInFrames={300}
        fps={30}
        defaultProps={{
          firstName: 'Christian',
          lastName: 'Fassnacht',
          seasonGoal: 10,
        }}
      ></Composition>
      <Composition
        id="Score"
        height={1920}
        width={1080}
        component={Score}
        durationInFrames={300}
        fps={30}
      ></Composition>
      <Composition
        id="Jana"
        height={1920}
        width={1080}
        component={Jana}
        durationInFrames={300}
        fps={30}
      ></Composition>
      <Composition
        id="Minute"
        height={1920}
        width={1080}
        component={Minute}
        durationInFrames={300}
        fps={30}
        defaultProps={{
          minute: 75,
        }}
      ></Composition>
      <Composition
        id="NewScore"
        height={1920}
        width={1080}
        component={NewScore}
        durationInFrames={300}
        fps={30}
        defaultProps={{
          homeScore: 1,
          awayScore: 0,
          awayTeam: Teams.ZURICH,
        }}
      ></Composition>
    </>
  );
};
