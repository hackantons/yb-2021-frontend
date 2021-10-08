import React from 'react';
import { useRouter } from 'next/router';
import styles from '@comps/CreateVideo.module.css';
import CreateVideoGoal from '@comps/CreateVideoGoal';
import EventList from '@comps/EventList';
import ShareFileModal from '@comps/ShareFileModal';
import cn from '@utils/classnames';

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();
  const [videoFile, setVideoFile] = React.useState<string>(null);
  const [tweetMessage, setTweetMessage] = React.useState<string>('');
  const [fileName, setFileName] = React.useState<string>('');

  return (
    <div className={cn(className, styles.root)}>
      {route === '/create/event' && <EventList className={styles.events} />}
      <CreateVideoGoal
        setTweetMessage={setTweetMessage}
        setVideoFile={setVideoFile}
        setFileName={setFileName}
      />
      {videoFile && (
        <ShareFileModal
          onClose={() => setVideoFile('')}
          videoFile={videoFile}
          tweetMessage={tweetMessage}
          fileName={fileName}
        />
      )}
    </div>
  );
};

export default CreateVideo;
