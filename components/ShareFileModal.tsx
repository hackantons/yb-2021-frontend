import React from 'react';
import { Button, PortalBox, ButtonGroup } from '@theme';

// todo: download file name

const ShareFileModal = ({
  videoFile,
  onClose,
  tweetMessage,
  fileName,
}: {
  videoFile: string;
  onClose: () => void;
  tweetMessage: string;
  fileName?: string;
}) => {
  const tweetVideo = () => {
    const body = {
      videoPath: videoFile,
      //tweetMessage: tweetMessage,
      tweetMessage: `%lastName% gleicht aus für YB! Das Spiel können wir noch gewinnen! 💛🖤`,
    };

    fetch('/api/video/tweet', { body: JSON.stringify(body), method: 'POST' });
  };

  return (
    <PortalBox title="Success!" close={onClose} size="small">
      <p>Das Video wurde erfolgreich erstellt.</p>
      <br />
      <br />
      <ButtonGroup>
        <Button
          icon="trayArrowDown"
          useAnchor
          href={videoFile}
          download={fileName === '' ? 'output' : fileName}
        >
          Download
        </Button>
        <Button icon="twitter" onClick={tweetVideo} />
        <Button icon="instagram" onClick={tweetVideo} />
        <Button icon="facebook" onClick={tweetVideo} />
      </ButtonGroup>
    </PortalBox>
  );
};

export default ShareFileModal;
