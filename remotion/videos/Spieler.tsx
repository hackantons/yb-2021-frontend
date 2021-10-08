import React, { useEffect, useState } from 'react';
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  Img,
  interpolate,
  useCurrentFrame,
} from 'remotion';
import { SlidingText } from './SlidingText';
// @ts-expect-error
import ybfont from './big_noodle_titling.ttf';
import fassnacht from './fassnacht-removebg.png';

const font = new FontFace('Antique Olive Std', `url(${ybfont})`).load();

font.then(async () => document.fonts.add(await font));

const player: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  right: 0,
};

export const Spieler: React.FC = () => {
  const frame = useCurrentFrame();
  const [waitForFont] = useState(() => delayRender());
  useEffect(() => {
    continueRender(waitForFont);
  }, [waitForFont]);
  const colorDodgeFlicker =
    frame > 10 ? 1 : Math.floor(frame / 3) % 2 === 0 ? 1 : 0;
  return (
    <AbsoluteFill>
      <SlidingText delay={0} fontSize={200} color="white" left={100} top={120}>
        CHRISTIAN
      </SlidingText>
      <SlidingText delay={3} fontSize={200} color="white" left={100} top={320}>
        FASSNACHT
      </SlidingText>
      <SlidingText delay={6} fontSize={80} color="#ffcf00" left={100} top={530}>
        10. SAISONTOR
      </SlidingText>
      <Img
        style={{ ...player, mixBlendMode: 'color-dodge' }}
        // @ts-ignore
        src={fassnacht}
      ></Img>
      <Img
        style={{ ...player, opacity: colorDodgeFlicker }}
        // @ts-ignore

        src={fassnacht}
      ></Img>
    </AbsoluteFill>
  );
};
