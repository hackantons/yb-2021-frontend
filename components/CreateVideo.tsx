import React from 'react';
import { useRouter } from 'next/router';
import styles from '@comps/CreateVideo.module.css';
import CreateVideoChange from '@comps/CreateVideoChange';
import CreateVideoGoal from '@comps/CreateVideoGoal';
import EventList from '@comps/EventList';
import ShareFileModal from '@comps/ShareFileModal';
import cn from '@utils/classnames';
import { EVENT_TYPES } from '@utils/infos';

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();
  const [videoFile, setVideoFile] = React.useState<string>('');
  const [tweetMessage, setTweetMessage] = React.useState<string>('');
  const [activeType, setActiveType] = React.useState<string>(
    Object.values(EVENT_TYPES)[0]
  );

  const videoTypes: Record<string, JSX.Element> = {
    [EVENT_TYPES.CHANGE]: (
      <CreateVideoChange
        setTweetMessage={setTweetMessage}
        setVideoFile={setVideoFile}
        setActiveType={setActiveType}
      />
    ),
    [EVENT_TYPES.GOAL]: (
      <CreateVideoGoal
        setTweetMessage={setTweetMessage}
        setVideoFile={setVideoFile}
        setActiveType={setActiveType}
      />
    ),
  };
  const activeVideoComp = React.useMemo(
    () => videoTypes[activeType],
    [activeType]
  );

  return (
    <div className={cn(className, styles.root)}>
      {route === '/create/event' && (
        <EventList setActiveType={setActiveType} className={styles.events} />
      )}
      {activeVideoComp}
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
