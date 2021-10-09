import { createRef } from 'react';

export const anyRef = createRef<{
  setOrientation: (orientation: Orientiation) => void;
}>();

export type Orientiation = 'portrait' | 'square';
