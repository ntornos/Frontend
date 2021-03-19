import React from 'react';
import { Button } from './FormButton.styles';

const FormButton = ({ imageUrl, name, onClick, children, ...otherProps }) => (
  <Button onClick={onClick} {...otherProps}>
    {imageUrl && <img src={imageUrl} alt={`${name} Logo`} />}
    {children}
  </Button>
);

export default FormButton;
