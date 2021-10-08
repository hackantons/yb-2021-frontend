import { Player } from '@remotion/player';
import React, { useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Form, FormElement, InputSelect, InputText } from '@theme';
import cn from '@utils/classnames';
import { PlayerI, TEAM_API, Teams } from '@utils/infos';
import { Main } from '../remotion/videos/Main';
import styles from './CreateVideo.module.css';
import Download from './Download';

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const filteredTeams = Object.values(Teams).filter((e) => e !== 'yb');
  console.log('filteredTeams', filteredTeams, filteredTeams[0]);
  const form = useForm<{
    playerIndex: string;
    minute: number;
    homeScore: number;
    awayScore: number;
    awayTeam: Teams;
  }>({
    defaultValues: {
      playerIndex: '0',
      minute: 0,
      homeScore: 1,
      awayScore: 0,
      awayTeam: filteredTeams[0],
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
            homeScore: formValues.homeScore <= 1 ? 1 : formValues.homeScore,
            awayScore: formValues.awayScore,
            awayTeam: formValues.awayTeam,
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
        </Form>
        <Download />
      </div>
    </div>
  );
};

export default CreateVideo;
