import calendarRangeOutline from './_icons/calendar-range-outline.svg';
import facebook from './_icons/facebook.svg';
import instagram from './_icons/instagram.svg';
import plus from './_icons/plus.svg';
import tiktok from './_icons/tiktok.svg';
import trayArrowDown from './_icons/tray-arrow-down.svg';
import tune from './_icons/tune.svg';
import twitter from './_icons/twitter.svg';
import url from './_icons/url.svg';
import videoPlusOutline from './_icons/video-plus-outline.svg';

const icons = {
  twitter,
  plus,
  videoPlusOutline,
  trayArrowDown,
  calendarRangeOutline,
  facebook,
  instagram,
  tune,
  tiktok,
  url,
};

export type IconType = keyof typeof icons;

export default icons;
