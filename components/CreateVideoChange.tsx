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
import cn from '@utils/classnames';
import { fetchVideo } from '@utils/fetchVideo';
import { Orientiation } from '@utils/hack';
import {
  PlayerI,
  TEAM_API,
  TEAMS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  FPS,
  GOAL_VIDEO_DURATION,
  EVENT_TYPES,
} from '@utils/infos';
import { Substitution } from '../remotion/videos/Substitution';
import styles from './CreateVideo.module.css';
import FormatToggle from './FormatToggle';

interface InputProps {
  player1: string;
  player2: string;
  minute: number;
}

const CreateVideo = ({
  setTweetMessage = (str) => {},
  setVideoFile = (str) => {},
  setActiveType = (str) => {},
  formUpdates = null,
  orientation,
}: {
  setTweetMessage?: (str: string) => void;
  setVideoFile?: (str: string) => void;
  setActiveType?: (str: string) => void;
  formUpdates?: Array<[string, string]>;
  orientation: Orientiation;
}) => {
  const [videoProgress, setVideoProgress] = React.useState<number>(0);
  const [videoInProgress, setVideoInProgress] = React.useState<boolean>(false);

  const form = useForm<InputProps>({
    defaultValues: {
      player1: Object.keys(TEAM_API)[0],
      player2: Object.keys(TEAM_API)[1],
      minute: 70,
    },
  });

  React.useEffect(() => {
    formUpdates && formUpdates.map((v) => console.log('update', v[0], v[1]));
  }, [formUpdates]);

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
          compositionHeight={orientation === 'portrait' ? VIDEO_HEIGHT : 1080}
          compositionWidth={orientation === 'portrait' ? VIDEO_WIDTH : 1080}
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
        <FormatToggle orientation={orientation} />

        <div className={styles.setActiveType}>
          Template:{' '}
          <button
            className={cn(
              styles.setActiveTypeButton,
              styles.setActiveTypeButtonActive
            )}
            onClick={() => setActiveType(EVENT_TYPES.CHANGE)}
          >
            Auswechslung
          </button>
          <button
            className={cn(styles.setActiveTypeButton)}
            onClick={() => setActiveType(EVENT_TYPES.GOAL)}
          >
            Tor
          </button>
        </div>
        <Form
          onSubmit={form.handleSubmit(async (data) => {
            const body = {
              composition:
                orientation === 'portrait'
                  ? 'Substitution'
                  : 'SubstitutionSquare',
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
            name="player1"
            label="Spieler Out"
            Input={InputSelect}
            form={form}
            options={Object.entries(TEAM_API)
              .filter(([a, b]) => {
                return a !== '99' && a !== '98';
              })
              .reduce(
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
            options={Object.entries(TEAM_API)
              .filter(([a, b]) => {
                return a !== '99' && a !== '98';
              })
              .reduce(
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
