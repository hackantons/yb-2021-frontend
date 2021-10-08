import { Player } from '@remotion/player';
import React, { useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Form, FormElement, InputSelect } from '@theme';
import cn from '@utils/classnames';
import { PlayerI, TEAM_API } from '@utils/infos';
import { Goal } from '../remotion/videos/Goal';
import styles from './CreateVideo.module.css';

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const form = useForm<{
    playerIndex: string;
  }>({
    defaultValues: {
      playerIndex: '0',
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
          component={Goal}
          compositionHeight={1920}
          compositionWidth={1080}
          fps={30}
          durationInFrames={300}
          controls
          inputProps={{
            firstName: selectedPlayer.firstName,
            lastName: selectedPlayer.lastName,
            seasonGoal: selectedPlayer.stat.goals,
          }}
        />
      </div>
      <div className={styles.form}>
        <Form
          onSubmit={form.handleSubmit((data) => {
            console.log(data);
          })}
        >
          <FormElement
            name="playerIndex"
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
        </Form>
      </div>
    </div>
  );
};

export default CreateVideo;
