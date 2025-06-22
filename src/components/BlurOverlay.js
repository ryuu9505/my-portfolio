import { BlurOverlayContainer } from '@styles/layout/BlurOverlayStyles';
import React from 'react';

function BlurOverlay({ onClose, open }) {
  return <BlurOverlayContainer onClick={onClose} open={open} />;
}

export default BlurOverlay;
