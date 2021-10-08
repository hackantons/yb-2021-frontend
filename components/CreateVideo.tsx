import { Player } from '@remotion/player';
import React from 'react';
import cn from '@utils/classnames';
import { Goal } from '../remotion/videos/Goal';
import styles from './CreateVideo.module.css';
import Download from './Download'

const CreateVideo = ({ className = '' }: { className?: string }) => {
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
            firstName: 'Nico',
            lastName: 'Martin',
            seasonGoal: 5,
          }}
        />
      </div>
      <div className={styles.form}>FORM</div>
      <Download />
    </div>
  );
};

export default CreateVideo;
