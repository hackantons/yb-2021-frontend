import { Player } from '@remotion/player';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  Form,
  FormControls,
  FormElement,
  InputSelect,
  InputText,
} from '@theme';
import EventList from '@comps/EventList';
import ShareFileModal from '@comps/ShareFileModal';
import cn from '@utils/classnames';
import {
  PlayerI,
  TEAM_API,
  Teams,
  Sponsors,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  FPS,
  GOAL_VIDEO_DURATION,
} from '@utils/infos';
import { Main } from '../remotion/videos/Main';
import styles from './CreateVideo.module.css';
import { mapSponsor, mapTeam } from './map-team';
import { buildMessage } from '@utils/tweets'

interface RenderResponse {
  renderId: string;
  bucketName: string;
}

interface ProgressResponse {
  overallProgress: number;
  outputFile: string | null;
}

interface InputProps {
  playerIndex: string;
  minute: number;
  homeScore: number;
  awayScore: number;
  awayTeam: Teams;
  sponsor: Sponsors;
}

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();

  const [videoProgress, setVideoProgress] = React.useState<number>(0);
  const [videoInProgress, setVideoInProgress] = React.useState<boolean>(false);
  const [videoFile, setVideoFile] = React.useState<string>(null);
  const [tweetMessage, setTweetMessage] = React.useState<string>('')

  const filteredTeams = Object.values(Teams).filter((e) => e !== 'yb');
  const filteredSponsors = Object.values(Sponsors);

  const form = useForm<InputProps>({
    defaultValues: {
      playerIndex: Object.keys(TEAM_API)[0],
      minute: 20,
      homeScore: 1,
      awayScore: 0,
      awayTeam: filteredTeams[0],
      sponsor: filteredSponsors[0],
    },
  });

  const formValues = useWatch({ control: form.control });
  const selectedPlayer = React.useMemo<PlayerI>(
    () => TEAM_API[parseInt(formValues.playerIndex)],
    [formValues]
  );

  const inputProps = {
    firstName: selectedPlayer.firstName,
    lastName: selectedPlayer.lastName,
    seasonGoal: selectedPlayer.stat.goals + 1,
    minute: formValues.minute,
    homeScore: formValues.homeScore <= 1 ? 1 : formValues.homeScore,
    awayScore: formValues.awayScore,
    awayTeam: formValues.awayTeam,
    sponsor: formValues.sponsor,
    portraitAction: selectedPlayer.assets.action,
    playerNumber: selectedPlayer.number,
  };

  return (
    <div className={cn(className, styles.root)}>
      {route === '/create/event' && <EventList className={styles.events} />}
      <div className={styles.preview}>
        <Player
          style={{
            display: 'block',
            width: 400,
            marginBottom: 0,
          }}
          component={Main}
          compositionHeight={VIDEO_HEIGHT}
          compositionWidth={VIDEO_WIDTH}
          fps={FPS}
          durationInFrames={GOAL_VIDEO_DURATION}
          controls
          loop
          spaceKeyToPlayOrPause
          autoPlay
          inputProps={inputProps}
        />
      </div>
      <div className={styles.form}>
        <h2 className={styles.formTitle}>Video Settings</h2>
        <Form
          onSubmit={form.handleSubmit(async (data) => {
            const body = {
              composition: 'Goal',
              inputProps,
            };

            setVideoInProgress(true);
            const response = await fetch('/api/video/render', {
              method: 'POST',
              body: JSON.stringify(body),
            });
            const responseBody = (await response.json()) as RenderResponse;
            const intervalId = setInterval(async () => {
              const progress = await fetch('/api/video/progress', {
                method: 'POST',
                body: JSON.stringify(responseBody),
              });
              const progressJson = (await progress.json()) as ProgressResponse;
              setVideoProgress(Math.ceil(progressJson.overallProgress * 100));

              if (progressJson.overallProgress === 1) {
                window.clearInterval(intervalId);
                setTweetMessage(buildMessage(inputProps))
                setVideoFile(progressJson.outputFile);
                setVideoInProgress(false);
                setVideoProgress(0);
              }
            }, 1000);
          })}
        >
          <FormElement
            name="playerIndex"
            label="Spieler"
            Input={InputSelect}
            form={form}
            options={Object.entries(TEAM_API).reduce(
              (acc, [index, p]) => ({
                ...acc,
                [index]: `${p.firstName} ${p.lastName}`,
              }),
              {}
            )}
          />
          <FormElement
            name="minute"
            label="Minute"
            Input={InputText}
            form={form}
            min={1}
            max={90}
            type="number"
          />
          <FormElement
            name="homeScore"
            label="Score YB"
            Input={InputText}
            form={form}
            type="number"
          />
          <FormElement
            name="awayScore"
            label="Score Gast"
            Input={InputText}
            form={form}
            type="number"
          />
          <FormElement
            name="awayTeam"
            label="Gegner"
            Input={InputSelect}
            form={form}
            options={filteredTeams.reduce(
              (acc, team) => ({
                ...acc,
                [team]: mapTeam(team),
              }),
              {}
            )}
          />
          <FormElement
            name="sponsor"
            label="Sponsor"
            Input={InputSelect}
            form={form}
            options={filteredSponsors.reduce(
              (acc, team) => ({
                ...acc,
                [team]: mapSponsor(team),
              }),
              {}
            )}
          />
          <FormControls
            align="right"
            loading={videoInProgress}
            progress={videoProgress}
            value="Video generieren"
          />
        </Form>
      </div>
      {videoFile && (
        <ShareFileModal
          onClose={() => setVideoFile('')}
          videoFile={videoFile}
          tweetMessage={tweetMessage}
        />
      )}
    </div>
  );
};

export default CreateVideo;
