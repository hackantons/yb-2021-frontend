import React, { useImperativeHandle, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '@comps/../passwordProtected/LoginForm';
import { usePasswordProtected } from '@comps/../passwordProtected/PasswordProtectedProvider';
import CreateVideoChange from '@comps/CreateVideoChange';
import CreateVideoGoal from '@comps/CreateVideoGoal';
import EventList from '@comps/EventList';
import ShareFileModal from '@comps/ShareFileModal';
import cn from '@utils/classnames';
import { anyRef, Orientiation } from '@utils/hack';
import { EVENT_TYPES } from '@utils/infos';
import styles from './CreateVideo.module.css';
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
  const { isAuthenticated, init } = usePasswordProtected();

  useImperativeHandle(anyRef, () => {
    return {
      setOrientation: setOrientation,
    };
  });

  if (!init) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.loginForm}>
        <p>
          Thank you for your interest in our app. Unfortunately, we had to
          restrict access to the computationally intensive parts. However, you
          can always watch the{' '}
          <a
            href="https://twitter.com/nic_o_martin/status/1447104327789711364"
            target="_blank"
            rel="noopener noreferrer"
          >
            screencast
          </a>{' '}
          or contact one of us.
        </p>
        <LoginForm />
      </div>
    );
  }

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
