import { Player } from '@remotion/player';
import React, { useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import {
  Form,
  FormControls,
  FormElement,
  InputSelect,
  InputText,
  PortalBox,
} from '@theme';
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

interface RenderResponse {
  renderId: string;
  bucketName: string;
}

interface ProgressResponse {
  overallProgress: number;
  outputFile: string | null;
}

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const [videoProgress, setVideoProgress] = React.useState<number>(0);
  const [videoInProgress, setVideoInProgress] = React.useState<boolean>(false);
  const [videoFile, setVideoFile] = React.useState<string>(null);

  const filteredTeams = Object.values(Teams).filter((e) => e !== 'yb');
  const filteredSponsors = Object.values(Sponsors);

  const form = useForm<{
    playerIndex: string;
    minute: number;
    homeScore: number;
    awayScore: number;
    awayTeam: Teams;
    sponsor: Sponsors;
  }>({
    defaultValues: {
      playerIndex: '0',
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

  return (
    <div className={cn(className, styles.root)}>
      <div className={styles.preview}>
        <Player
          style={{
            display: 'inline-block',
            width: 400,
          }}
          component={Main}
          compositionHeight={VIDEO_HEIGHT}
          compositionWidth={VIDEO_WIDTH}
          fps={FPS}
          durationInFrames={GOAL_VIDEO_DURATION}
          controls
          loop
          autoPlay
          inputProps={{
            firstName: selectedPlayer.firstName,
            lastName: selectedPlayer.lastName,
            seasonGoal: selectedPlayer.stat.goals,
            minute: formValues.minute,
            homeScore: formValues.homeScore <= 1 ? 1 : formValues.homeScore,
            awayScore: formValues.awayScore,
            awayTeam: formValues.awayTeam,
            sponsor: Sponsors.BIER,
          }}
        />
      </div>
      <div className={styles.form}>
        <h2 className={styles.formTitle}>Video Settings</h2>
        <Form
          onSubmit={form.handleSubmit(async (data) => {
            data.homeScore = data.homeScore <= 1 ? 1 : data.homeScore;

            const body = {
              composition: 'Goal',
              inputProps: data,
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
                window.location.assign(progressJson.outputFile);
              }
            }, 1000);
          })}
        >
          <FormElement
            name="playerIndex"
            label="Spieler"
            Input={InputSelect}
            form={form}
            options={TEAM_API.reduce(
              (acc, p, index) => ({
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
            type="number"
          />
          <FormElement
            name="homeScore"
            label="Score YB"
            Input={InputText}
            min="1"
            form={form}
            type="number"
          />
          <FormElement
            name="awayScore"
            label="Score Gast"
            Input={InputText}
            form={form}
            type="number"
            disabled
          />
          <FormElement
            name="awayTeam"
            label="Gegner"
            Input={InputSelect}
            form={form}
            options={filteredTeams.reduce(
              (acc, team) => ({
                ...acc,
                [team]: team,
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
        />
      )}
    </div>
  );
};

export default CreateVideo;
