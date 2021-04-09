import { iconsLib } from '../../assets/iconsLib';

import { IconContainer } from './Icon.styles';

const Icon = ({ iconName }) => {
  const theIcon = iconsLib[iconName];

  return (
    <IconContainer>
      <svg viewBox='-1 0 512 512' fill='red'>
        {theIcon}
      </svg>
    </IconContainer>
  );
};

export default Icon;
