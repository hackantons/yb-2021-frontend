import { Player } from '@remotion/player';
import React, { useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Form, FormElement, InputSelect, InputText } from '@theme';
import cn from '@utils/classnames';
import { PlayerI, TEAM_API } from '@utils/infos';
import { Main } from '../remotion/videos/Main';
import styles from './CreateVideo.module.css';
import Download from './Download'

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const form = useForm<{
    playerIndex: string;
    minute: number;
    homeScore: number;
    awayScore: number;
    awayTeam: any;
  }>({
    defaultValues: {
      playerIndex: '0',
      minute: 0,
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
          compositionHeight={1920}
          compositionWidth={1080}
          fps={30}
          durationInFrames={300}
          controls
          loop
          autoPlay
          inputProps={{
            firstName: selectedPlayer.firstName,
            lastName: selectedPlayer.lastName,
            seasonGoal: selectedPlayer.stat.goals,
            minute: formValues.minute,
          }}
        />
      </div>
      <div className={styles.form}>
        <h2 className={styles.formTitle}>Video Settings</h2>
        <Form
          onSubmit={form.handleSubmit((data) => {
            console.log(data);
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
          />
        </Form>
        <Download />
      </div>
    </div>
  );
};

export default CreateVideo;
