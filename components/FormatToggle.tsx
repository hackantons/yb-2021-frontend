import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { Icon, IconType } from '@theme';
import { anyRef, Orientiation } from '@utils/hack';
import { ComboboxContainer, ComboboxItem } from './Combobox';

const FormatToggle: React.FC<{
  orientation: Orientiation;
}> = ({ orientation }) => {
  return (
    <ComboboxContainer>
      <ComboboxItem
        selected={orientation === 'portrait'}
        onClick={() => anyRef.current.setOrientation('portrait')}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="mobile"
          className="svg-inline--fa fa-mobile fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          style={{ height: 20, marginRight: 8 }}
        >
          <path
            fill="currentColor"
            d="M192 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM320 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h212c3.3 0 6-2.7 6-6z"
          ></path>
        </svg>
        Story
      </ComboboxItem>
      <ComboboxItem
        selected={orientation === 'square'}
        onClick={() => anyRef.current.setOrientation('square')}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="square"
          className="svg-inline--fa fa-square fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ height: 20, marginRight: 8 }}
        >
          <path
            fill="currentColor"
            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"
          ></path>
        </svg>
        Post
      </ComboboxItem>
    </ComboboxContainer>
  );
};

export default FormatToggle;
