import plus from './_icons/plus.svg';
import twitter from './_icons/twitter.svg';
import videoPlusOutline from './_icons/video-plus-outline.svg';

const icons = {
  twitter,
  plus,
  videoPlusOutline,
};

export type IconType = keyof typeof icons;

export default icons;
