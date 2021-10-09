import React from 'react';
import { Button, PortalBox, ButtonGroup } from '@theme';
import cn from '@utils/classnames';
import inputStyles from '../theme/form/Input.module.css';
import styles from './ShareFileModal.module.css';

const ShareFileModal = ({
  videoFile,
  onClose,
  tweetMessage,
}: {
  videoFile: string;
  onClose: () => void;
  tweetMessage: string;
}) => {
  const [tweetMessageInput, setTweetMessageInput] =
    React.useState<boolean>(false);
  const [tweetMessageEdited, setTweetMessageEdited] =
    React.useState<string>(tweetMessage);
  const [tweetLoading, setTweetLoading] = React.useState<boolean>(false);
  const [tweetUrl, setTweetUrl] = React.useState<string>('');

  const tweetVideo = async () => {
    setTweetLoading(true);
    const body = {
      videoPath: videoFile,
      tweetMessage: tweetMessage,
    };

    const resp = await fetch('/api/video/tweet', {
      body: JSON.stringify(body),
      method: 'POST',
    });
    const { url: tweetUrl } = await resp.json();

    setTweetLoading(false);
    console.log({ tweetUrl });
    setTweetUrl(tweetUrl);
  };

  return (
    <PortalBox title="Success!" close={onClose} size="small">
      <p>Dein Video wurde erfolgreich erstellt.</p>
      <ButtonGroup className={styles.buttons}>
        <Button icon="trayArrowDown" useAnchor href={videoFile} download>
          Download
        </Button>
        <Button
          icon="twitter"
          style={{
            backgroundColor: '#1d9bf0',
            borderColor: '#1d9bf0',
          }}
          onClick={() => setTweetMessageInput((open) => !open)}
        />
        <Button
          icon="instagram"
          style={{
            backgroundColor: '#E4405F',
            borderColor: '#E4405F',
          }}
          onClick={() => alert('Haaaaalt Stop! Das ist nur eine Hackaton Demo')}
        />
        <Button
          icon="facebook"
          style={{
            backgroundColor: '#1877F2',
            borderColor: '#1877F2',
          }}
          onClick={() => alert('Haaaaalt Stop! Das ist nur eine Hackaton Demo')}
        />
      </ButtonGroup>
      {tweetMessageInput && (
        <div>
          <textarea
            className={cn(
              inputStyles.input,
              inputStyles.textarea,
              styles.message
            )}
            onChange={(e) =>
              setTweetMessageEdited((e.target as HTMLTextAreaElement).value)
            }
          >
            {tweetMessageEdited}
          </textarea>
          <ButtonGroup className={styles.tweetControls} align="right">
            {Boolean(tweetUrl) && (
              <a
                href={tweetUrl}
                rel="noreferrrer noreferrer"
                target="_blank"
                className={styles.tweetLink}
              >
                Tweet ansehen
              </a>
            )}
            <Button
              className={styles.tweetSend}
              loading={tweetLoading}
              onClick={tweetVideo}
            >
              Senden
            </Button>
          </ButtonGroup>
        </div>
      )}
    </PortalBox>
  );
};

export default ShareFileModal;
