import React from 'react';
import { AbsoluteFill, Img } from 'remotion';
import { Sponsors } from '../../utils/infos';

export const SponsorLogo: React.FC<{
  sponsor: Sponsors;
}> = ({ sponsor }) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Img
        style={{
          width: '30%',
          marginBottom: 30,
          opacity: sponsor === Sponsors.ISOLUTIONS ? 1 : 0.9,
        }}
        src={`https://jonnyburger.s3.eu-central-1.amazonaws.com/sponsor-${sponsor}.png`}
      ></Img>
    </AbsoluteFill>
  );
};
