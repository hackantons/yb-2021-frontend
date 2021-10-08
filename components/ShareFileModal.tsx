import React from 'react';
import { Button, PortalBox } from '@theme';

// todo: download file name

const ShareFileModal = ({
  videoFile,
  onClose,
}: {
  videoFile: string;
  onClose: () => void;
}) => (
  <PortalBox title="Success!" close={onClose} size="small">
    <p>Das Video wurde erfolgreich erstellt.</p>
    <br />
    <br />
    <Button icon="trayArrowDown" useAnchor href={videoFile} download>
      Download
    </Button>
  </PortalBox>
);

export default ShareFileModal;
