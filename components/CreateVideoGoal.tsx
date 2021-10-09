import { Player } from '@remotion/player';
import React, { createRef, useImperativeHandle } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import {
  Form,
  FormControls,
  FormElement,
  InputSelect,
  InputText,
} from '@theme';
import { fetchVideo } from '@utils/fetchVideo';
import {
  PlayerI,
  TEAM_API,
  TEAMS,
  SPONSORS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  FPS,
  GOAL_VIDEO_DURATION,
} from '@utils/infos';
import { buildMessage } from '@utils/tweets';
import { Main } from '../remotion/videos/Main';
import { MainComp } from '../remotion/videos/MainComp';
import styles from './CreateVideo.module.css';

import FormatToggle from './FormatToggle'
import styled from "@emotion/styled";
import { anyRef } from '@utils/hack';


interface InputProps {
  comp: 'Main' | 'MainSquare';
  playerIndex: string;
  minute: number;
  homeScore: number;
  awayScore: number;
  awayTeam: string;
  sponsor: string;
}



const CreateVideo = ({
  setTweetMessage = (str) => {},
  setVideoFile = (str) => {},
}: {
  setTweetMessage?: (res: string) => void;
  setVideoFile?: (res: string) => void;
}) => {
  const [videoProgress, setVideoProgress] = React.useState<number>(0);
  const [videoInProgress, setVideoInProgress] = React.useState<boolean>(false);

  const filteredTeams: Record<string, string> = Object.entries(TEAMS).reduce(
    (acc, [index, title]) => ({
      ...acc,
      ...(index !== 'yb' ? { [index]: title } : {}),
    }),
    {}
  );

  const form = useForm<InputProps>({
    defaultValues: {
      comp: 'Main',
      playerIndex: Object.keys(TEAM_API)[0],
      minute: 20,
      homeScore: 1,
      awayScore: 0,
      awayTeam: Object.keys(filteredTeams)[0],
      sponsor: Object.keys(SPONSORS)[0],
    },
  });

  useImperativeHandle(anyRef, () => {
    return {
       setValue: form.setValue
    }
  })


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
    <React.Fragment>
      <div className={styles.format}>     
      </div>
      <div className={styles.preview}>
        <Player
          style={{
            display: 'block',
            width: 400,
            marginBottom: 0,
          }}
          component={formValues.comp === 'MainSquare' ? MainComp : Main}
          compositionHeight={
            formValues.comp === 'MainSquare' ? 1080 : VIDEO_HEIGHT
          }
          compositionWidth={
            formValues.comp === 'MainSquare' ? 1080 : VIDEO_WIDTH
          }
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
            setTweetMessage(buildMessage(inputProps));

            fetchVideo(body, setVideoProgress).then((file) => {
              setVideoFile(file);
              setVideoInProgress(false);
              setVideoProgress(0);
            });

            setVideoInProgress(true);
          })}
        >

          <FormatToggle />   

          <FormElement
          
            name="comp"
            label="Format"
            Input={InputSelect}
            form={form}
            options={{
              Main: 'Portrait',
              MainSquare: 'Square',
            }}
          />
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
            options={filteredTeams}
          />
          <FormElement
            name="sponsor"
            label="Sponsor"
            Input={InputSelect}
            form={form}
            options={SPONSORS}
          />
          <FormControls
            align="right"
            loading={videoInProgress}
            progress={videoProgress}
            value="Video generieren"
          />
        </Form>
      </div>
    </React.Fragment>
  );
};

export default CreateVideo;
