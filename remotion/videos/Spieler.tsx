import React, { useEffect, useState } from 'react';
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { interpolateAs } from 'next/dist/shared/lib/router/router';
import { isClientSide } from '@utils/helpers';
import { Carola } from './Carola';
import { DefaultSpieler } from './DefaultSpieler';
import { Jana } from './Jana';
import { SlidingText } from './SlidingText';
import { YELLOW } from './colors';
import { useFont } from './use-font';

export const Spieler: React.FC<{
  firstName: string;
  lastName: string;
  seasonGoal: number;
  playerNumber: number;
  portrait: string;
}> = ({ firstName, lastName, seasonGoal, playerNumber, portrait }) => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  useFont();

  return (
    <AbsoluteFill>
      {playerNumber === 98 ? (
        <Carola></Carola>
      ) : playerNumber === 99 ? (
        <Jana></Jana>
      ) : (
        <DefaultSpieler portrait={portrait} />
      )}
      <SlidingText delay={0} fontSize={200} color="white" left={100} top={120}>
        {firstName}
      </SlidingText>
      <SlidingText delay={3} fontSize={200} color="white" left={100} top={320}>
        {lastName}
      </SlidingText>
      <SlidingText delay={30} fontSize={80} color={YELLOW} left={100} top={530}>
        {seasonGoal}. SAISONTOR
      </SlidingText>
    </AbsoluteFill>
  );
};
