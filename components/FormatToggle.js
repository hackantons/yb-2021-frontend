import styled from "@emotion/styled";
import { Icon, IconType } from '@theme';
import { anyRef } from "@utils/hack";
import { useState, useEffect } from "react";


const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 1px solid black;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: white;
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: black;
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === "portrait"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const FormatToggle = () => {
    const [activeTheme, setActiveTheme] = useState("portrait");
    const inactiveTheme = activeTheme === "portrait" ? "square" : "portrait";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        console.log("theme: " + activeTheme)
        anyRef.current.setValue('comp', activeTheme)
        // window.localStorage.setItem("theme", activeTheme);
      }, [activeTheme]);    

  return (
    <ToggleButton type="button" onClick={() => setActiveTheme(inactiveTheme)}>

    <ToggleThumb activeTheme={activeTheme} />
      <span><img alt="portrait" src="/portrait.png" /></span>
      <span><img alt="portrait" src="/square.png" /></span>
    </ToggleButton>
  );
};

export default FormatToggle;