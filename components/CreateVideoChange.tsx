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
import { ComboboxContainer, ComboboxItem } from './Combobox';
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
        <h2 className={styles.formTitle}>Smart content Config</h2>

        <ComboboxContainer>
          <ComboboxItem
            onClick={() => setActiveType(EVENT_TYPES.GOAL)}
            selected={false}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="futbol"
              className="svg-inline--fa fa-futbol fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              style={{
                height: 20,
                marginRight: 8,
              }}
            >
              <path
                fill="currentColor"
                d="M483.8 179.4C449.8 74.6 352.6 8 248.1 8c-25.4 0-51.2 3.9-76.7 12.2C41.2 62.5-30.1 202.4 12.2 332.6 46.2 437.4 143.4 504 247.9 504c25.4 0 51.2-3.9 76.7-12.2 130.2-42.3 201.5-182.2 159.2-312.4zm-74.5 193.7l-52.2 6.4-43.7-60.9 24.4-75.2 71.1-22.1 38.9 36.4c-.2 30.7-7.4 61.1-21.7 89.2-4.7 9.3-10.7 17.8-16.8 26.2zm0-235.4l-10.4 53.1-70.7 22-64.2-46.5V92.5l47.4-26.2c39.2 13 73.4 38 97.9 71.4zM184.9 66.4L232 92.5v73.8l-64.2 46.5-70.6-22-10.1-52.5c24.3-33.4 57.9-58.6 97.8-71.9zM139 379.5L85.9 373c-14.4-20.1-37.3-59.6-37.8-115.3l39-36.4 71.1 22.2 24.3 74.3-43.5 61.7zm48.2 67l-22.4-48.1 43.6-61.7H287l44.3 61.7-22.4 48.1c-6.2 1.8-57.6 20.4-121.7 0z"
              ></path>
            </svg>
            Goal
          </ComboboxItem>
          <ComboboxItem
            onClick={() => setActiveType(EVENT_TYPES.CHANGE)}
            selected
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sort-alt"
              className="svg-inline--fa fa-sort-alt fa-w-12"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              style={{
                height: 20,
                marginRight: 8,
              }}
            >
              <path
                fill="currentColor"
                d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm203.29-219.31l-80-96a16 16 0 0 0-22.62 0l-80 96C186.65 142.74 193.78 160 208 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.19 0 21.36-17.24 11.29-27.31z"
              ></path>
            </svg>
            Auswechslung
          </ComboboxItem>
        </ComboboxContainer>
        <br />
        <br />

        <FormatToggle orientation={orientation} />

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
