import React from 'react';
import { Button } from './FormButton.styles';

const FormButton = ({ imageUrl, name, children, ...otherProps }) => (
  <Button type='submit' {...otherProps}>
    {imageUrl && <img src={imageUrl} alt={`${name} Logo`} />}
    {children}
  </Button>
);

export default FormButton;
