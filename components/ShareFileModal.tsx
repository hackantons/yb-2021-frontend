import React from 'react';
import { Button, PortalBox, ButtonGroup } from '@theme';

// todo: download file name

const ShareFileModal = ({
  videoFile,
  onClose,
  tweetMessage
}: {
    videoFile: string;
    onClose: () => void;
    tweetMessage: string;
  }) => {
  
  const tweetVideo = () => {
    const body = {
      videoPath: videoFile,
      tweetMessage: tweetMessage
    }

    fetch("/api/video/tweet", { body: JSON.stringify(body), method: 'POST' })
  }
  
  return (
  <PortalBox title="Success!" close={onClose} size="small">
    <p>Das Video wurde erfolgreich erstellt.</p>
    <br />
    <br />
    <ButtonGroup>
      <Button icon="trayArrowDown" useAnchor href={videoFile} download>
        Download
      </Button>
      <Button icon="twitter" onClick={ tweetVideo }></Button>
    </ButtonGroup>
  </PortalBox>)
};

export default ShareFileModal;
