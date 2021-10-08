import React from 'react';
import { PortalBox } from '@theme';

const ShareFileModal = ({
  videoFile,
  onClose,
}: {
  videoFile: string;
  onClose: () => void;
}) => <PortalBox close={onClose}>{videoFile}</PortalBox>;

export default ShareFileModal;
