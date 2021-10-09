import React from 'react';
import { useRouter } from 'next/router';
import styles from '@comps/CreateVideo.module.css';
import CreateVideoChange from '@comps/CreateVideoChange';
import CreateVideoGoal from '@comps/CreateVideoGoal';
import EventList from '@comps/EventList';
import ShareFileModal from '@comps/ShareFileModal';
import cn from '@utils/classnames';

export type ActiveFormType = 'change' | 'goal';

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();
  const [videoFile, setVideoFile] = React.useState<string>('');
  const [tweetMessage, setTweetMessage] = React.useState<string>('');
  const [activeType, setActiveType] = React.useState<ActiveFormType>('goal');

  const videoTypes: Record<ActiveFormType, JSX.Element> = {
    change: (
      <CreateVideoChange
        setTweetMessage={setTweetMessage}
        setVideoFile={setVideoFile}
        setActiveType={setActiveType}
      />
    ),
    goal: (
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
      {route === '/create/event' && <EventList className={styles.events} />}
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
