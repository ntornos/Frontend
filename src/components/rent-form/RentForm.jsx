import React from 'react';

import FormInput from '../form-input/FormInput';

const RentForm = () => {
  return (
    <>
      <FormInput label='Address' type='' />
      <select>
        <option>Apartment</option>
        <option>House</option>
      </select>
    </>
  );
};

export default RentForm;
