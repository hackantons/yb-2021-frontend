import { Player } from '@remotion/player';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import {
  Button,
  Form,
  FormControls,
  FormElement,
  InputSelect,
  InputText,
} from '@theme';
import { ActiveFormType } from '@comps/CreateVideo';
import cn from '@utils/classnames';
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
import { Substitution } from '../remotion/videos/Substitution';
import styles from './CreateVideo.module.css';

interface InputProps {
  comp: 'Main' | 'MainSquare';
  player1: string;
  player2: string;
  minute: number;
  sponsor: string;
}

const CreateVideo = ({
  setTweetMessage = (str) => {},
  setVideoFile = (str) => {},
  setActiveType = (str) => {},
}: {
  setTweetMessage?: (str: string) => void;
  setVideoFile?: (str: string) => void;
  setActiveType?: (str: ActiveFormType) => void;
}) => {
  const [videoProgress, setVideoProgress] = React.useState<number>(0);
  const [videoInProgress, setVideoInProgress] = React.useState<boolean>(false);

  const form = useForm<InputProps>({
    defaultValues: {
      comp: 'Substitution',
      player1: Object.keys(TEAM_API)[0],
      player2: Object.keys(TEAM_API)[0],
      minute: 20,
      sponsor: Object.keys(SPONSORS)[0],
    },
  });

  const formValues = useWatch({ control: form.control });

  const inputProps = {
    player1: parseInt(formValues.player1),
    player2: parseInt(formValues.player2),
    minute: formValues.minute,
  };

  return (
    <React.Fragment>
      <div className={styles.preview}>
        <Player
          style={{
            display: 'block',
            width: 400,
            marginBottom: 0,
          }}
          component={Substitution}
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
        <div className={styles.setActiveType}>
          Template:{' '}
          <button
            className={cn(
              styles.setActiveTypeButton,
              styles.setActiveTypeButtonActive
            )}
            onClick={() => setActiveType('change')}
          >
            Auswechslung
          </button>
          <button
            className={cn(styles.setActiveTypeButton)}
            onClick={() => setActiveType('goal')}
          >
            Tor
          </button>
        </div>
        <Form
          onSubmit={form.handleSubmit(async (data) => {
            const body = {
              composition: 'Goal',
              inputProps,
            };

            fetchVideo(body, setVideoProgress).then((file) => {
              setVideoFile(file);
              setVideoInProgress(false);
              setVideoProgress(0);
            });

            setVideoInProgress(true);
          })}
        >
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
            name="player1"
            label="Spieler Out"
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
            name="player2"
            label="Spieler In"
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
