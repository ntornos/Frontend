import React from 'react';

import { useField } from 'formik';
import { StyledErrorMessage } from '../select-formik/SelectOption.styles';
import { Input, Label } from '../listing-edit-forms/ListingEditForm.styles';
import { Container } from '../UtilityComponents';

const FormInputText = ({ label, width, placeholder, name }) => {
  const [field, meta] = useField(name);
  // console.log(props);

  const handleKeyDown = e => {
    let val = e.target.value;
    console.log('val: ', val);

    const filtered = val.replace(/\D/gm, '');
    console.log('filtered: ', filtered);

    // if (e.keyCode === 8) {}

    if (filtered !== val) {
      val = filtered;
    }

    if (val && !val.includes('SF')) {
      val = val + ' SF';
    }

    e.target.value = val;
  };

  return (
    <Container margin='1em' display='block'>
      <Container display='block'>
        {/* <label htmlFor={props.id || props.name}>{label}</label> */}
        <label htmlFor={name}>{label}</label>
      </Container>

      <Container display='block'>
        <span>
          <Input
            type='text'
            onInput={handleKeyDown}
            name={name}
            placeholder={placeholder}
            {...field}
            pattern='/\D/gm'
          />
          SF
        </span>
      </Container>
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </Container>
  );
};

export default FormInputText;

// // Util function
// function addFormatter (input, formatFn, callback) {
//   // storing prev input value.
//   let oldValue = input.value;

//   const handleInput = event => {
//     const result = formatFn(input.value, oldValue, event);
//     if (typeof result === 'string') {
//       input.value = result;
//     }

//     oldValue = input.value;

//     if (callback !== undefined) {
//       callback(input, result)
//     }
//   }

//   handleInput();
//   input.addEventListener("input", handleInput);
// }

// // Example implementation
// // HOF returning regex prefix formatter
// function createRegexFormatter (regex, defaultValue) {
//   return (newValue, oldValue) => regex.test(newValue)
//     ? newValue
//     : (newValue ? oldValue : defaultValue);
// }

// // Postfix formatter
// const input2 = document.getElementById('postfix');

// addFormatter(input2, createRegexFormatter(/\.com$/, '.com'), input => {
//   // input.focus();
//   const pos = Math.max(0, input.value.length - 4)
//   input.setSelectionRange(pos, pos);
// });
