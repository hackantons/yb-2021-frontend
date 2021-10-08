import calendarRangeOutline from './_icons/calendar-range-outline.svg';
import facebook from './_icons/facebook.svg';
import instagram from './_icons/instagram.svg';
import plus from './_icons/plus.svg';
import trayArrowDown from './_icons/tray-arrow-down.svg';
import twitter from './_icons/twitter.svg';
import videoPlusOutline from './_icons/video-plus-outline.svg';

const icons = {
  twitter,
  plus,
  videoPlusOutline,
  trayArrowDown,
  calendarRangeOutline,
  facebook,
  instagram,
};

export type IconType = keyof typeof icons;

export default icons;
