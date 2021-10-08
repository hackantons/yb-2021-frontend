import { Composition } from 'remotion';
import { Goal } from './videos/Goal';
import { Jana } from './videos/Jana';
import { Main } from './videos/Main';
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
    </>
  );
};
