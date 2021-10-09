import { Composition } from 'remotion';
import {
  FPS,
  GOAL_VIDEO_DURATION,
  SPONSORS,
  TEAMS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from '../utils/infos';
import { Goal } from './videos/Goal';
import { Jana } from './videos/Jana';
import { Main } from './videos/Main';
import { MainComp } from './videos/MainComp';
import { Minute } from './videos/Minute';
import { NewScore } from './videos/NewScore';
import { Score } from './videos/Score';
import { Substitution } from './videos/Substitution';

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
          portraitAction:
            'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/16_Fassnacht.png',
          seasonGoal: 10,
          minute: 10,
          homeScore: 1,
          awayScore: 0,
          awayTeam: TEAMS.zurich,
          sponsor: SPONSORS.swisscom,
          playerNumber: 99,
        }}
      />
      <Composition
        id="GoalSquare"
        height={1080}
        width={1080}
        component={MainComp}
        durationInFrames={GOAL_VIDEO_DURATION}
        fps={FPS}
        defaultProps={{
          firstName: 'Christian',
          lastName: 'Fassnacht',
          portraitAction:
            'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/16_Fassnacht.png',
          seasonGoal: 10,
          minute: 10,
          homeScore: 1,
          awayScore: 0,
          awayTeam: TEAMS.zurich,
          sponsor: SPONSORS.swisscom,
          playerNumber: 99,
        }}
      />
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
          portraitAction:
            'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/16_Fassnacht.png',
          seasonGoal: 10,
          playerNumber: 99,
        }}
      />
      <Composition
        id="Score"
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        component={Score}
        durationInFrames={200}
        fps={30}
      />
      <Composition
        id="Jana"
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        component={Jana}
        durationInFrames={200}
        fps={30}
      />
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
      />
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
          awayTeam: TEAMS.zurich,
          sponsor: SPONSORS.isolutions,
        }}
      ></Composition>
      <Composition
        id="Substitution"
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        component={Substitution}
        durationInFrames={150}
        fps={30}
        defaultProps={{
          player1: 16,
          player2: 20,
          minute: 79,
        }}
      ></Composition>
    </>
  );
};
