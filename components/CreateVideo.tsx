import React, { useImperativeHandle, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@comps/CreateVideo.module.css';
import CreateVideoChange from '@comps/CreateVideoChange';
import CreateVideoGoal from '@comps/CreateVideoGoal';
import EventList from '@comps/EventList';
import ShareFileModal from '@comps/ShareFileModal';
import cn from '@utils/classnames';
import { anyRef, Orientiation } from '@utils/hack';
import { EVENT_TYPES } from '@utils/infos';
import FormatToggle from './FormatToggle';

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();
  const [videoFile, setVideoFile] = React.useState<string>('');
  const [tweetMessage, setTweetMessage] = React.useState<string>('');
  const [defaultValues, setDefaultValues] = React.useState<Object>({});
  const [activeType, setActiveType] = React.useState<string>(
    Object.values(EVENT_TYPES)[0]
  );
  const [orientation, setOrientation] = useState<Orientiation>('portrait');

  useImperativeHandle(anyRef, () => {
    return {
      setOrientation: setOrientation,
    };
  });

  return (
    <div className={cn(className, styles.root)}>
      {route === '/create/event' && (
        <EventList
          setActiveType={setActiveType}
          setDefaultValues={setDefaultValues}
          className={styles.events}
        />
      )}
      {activeType === EVENT_TYPES.GOAL ? (
        <CreateVideoGoal
          setTweetMessage={setTweetMessage}
          setVideoFile={setVideoFile}
          setActiveType={setActiveType}
          orientation={orientation}
          values={defaultValues}
        />
      ) : activeType === EVENT_TYPES.CHANGE ? (
        <CreateVideoChange
          setTweetMessage={setTweetMessage}
          setVideoFile={setVideoFile}
          setActiveType={setActiveType}
          orientation={orientation}
          values={defaultValues}
        />
      ) : null}
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
