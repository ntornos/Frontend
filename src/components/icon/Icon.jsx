import { iconsLib } from '../../assets/iconsLib';

import { IconContainer } from './Icon.styles';

const Icon = ({ iconName }) => {
  const theIcon = iconsLib[iconName];

  return theIcon;
};

export default Icon;
