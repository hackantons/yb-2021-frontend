import { Composition } from 'remotion';
import {
  FPS,
  GOAL_VIDEO_DURATION,
  Sponsors,
  Teams,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from '../utils/infos';
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
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        component={Main}
        durationInFrames={GOAL_VIDEO_DURATION}
        fps={FPS}
        defaultProps={{
          firstName: 'Christian',
          lastName: 'Fassnacht',
          seasonGoal: 10,
          minute: 10,
          homeScore: 1,
          awayScore: 0,
          awayTeam: Teams.ZURICH,
          sponsor: Sponsors.SWISSCOM,
          playerNumber: 99,
        }}
      ></Composition>
      <Composition
        id="Player"
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        component={Goal}
        durationInFrames={200}
        fps={30}
        defaultProps={{
          firstName: 'Christian',
          lastName: 'Fassnacht',
          seasonGoal: 10,
          playerNumber: 99,
        }}
      ></Composition>
      <Composition
        id="Score"
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        component={Score}
        durationInFrames={200}
        fps={30}
      ></Composition>
      <Composition
        id="Jana"
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        component={Jana}
        durationInFrames={200}
        fps={30}
      ></Composition>
      <Composition
        id="Minute"
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        component={Minute}
        durationInFrames={200}
        fps={30}
        defaultProps={{
          minute: 75,
        }}
      ></Composition>
      <Composition
        id="NewScore"
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        component={NewScore}
        durationInFrames={200}
        fps={30}
        defaultProps={{
          homeScore: 1,
          awayScore: 0,
          awayTeam: Teams.ZURICH,
          sponsor: Sponsors.ISOLUTIONS,
        }}
      ></Composition>
    </>
  );
};
