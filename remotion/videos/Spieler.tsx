import React, { useEffect, useState } from 'react';
import { AbsoluteFill, continueRender, delayRender, Img } from 'remotion';
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
  const [waitForFont] = useState(() => delayRender());
  useEffect(() => {
    continueRender(waitForFont);
  }, [waitForFont]);
  return (
    <AbsoluteFill>
      <h1
        style={{
          color: 'white',
          fontSize: 200,
          position: 'absolute',
          left: 100,
          top: -30,
          fontFamily: 'Antique Olive Std',
        }}
      >
        CHRISTIAN
      </h1>
      <h1
        style={{
          color: 'white',
          fontSize: 200,
          position: 'absolute',
          left: 100,
          top: 180,
          fontFamily: 'Antique Olive Std',
        }}
      >
        FASSNACHT
      </h1>
      <h2
        style={{
          fontSize: 80,
          position: 'absolute',
          left: 103,
          top: 480,
          fontFamily: 'Antique Olive Std',
          color: '#ffcf00',
        }}
      >
        10. SAISONTOR
      </h2>
      <Img style={player} src={fassnacht}></Img>
    </AbsoluteFill>
  );
};
