import React, { createRef, useRef } from 'react';

import { useField } from 'formik';
import { StyledErrorMessage } from '../select-formik/SelectOption.styles';
import { Input, Label } from '../listing-edit-forms/ListingEditForm.styles';
import { Container } from '../UtilityComponents';

// Util function
// function addFormatter(input, formatFn, callback) {
//   // storing prev input value.
//   let oldValue = input.value;

//   const handleInput = event => {
//     const result = formatFn(input.value, oldValue, event);
//     if (typeof result === 'string') {
//       input.value = result;
//     }

//     oldValue = input.value;

//     if (callback !== undefined) {
//       callback(input, result);
//     }
//   };

//   handleInput();
//   input.addEventListener('input', handleInput);
// }

// Example implementation
// HOF returning regex prefix formatter
function createRegexFormatter(regex, defaultValue) {
  return (newValue, oldValue) =>
    regex.test(newValue) ? newValue : newValue ? oldValue : defaultValue;
}

// Postfix formatter
// const input2 = document.getElementById('postfix');

// addFormatter(input2, createRegexFormatter(/\.com$/, '.com'), input => {
//   // input.focus();
//   const pos = Math.max(0, input.value.length - 4);
//   input.setSelectionRange(pos, pos);
// });

const FormInputText = ({ label, width, placeholder, name }) => {
  const [field, meta] = useField(name);
  const inputRef = useRef(null);

  // console.log(inputRef.current);

  const createRegexFormatter = (regex, defaultValue) => {
    // take in the regex and default value SF in this case.
    return (newValue, oldValue) => {
      return regex.test(newValue) ? newValue : newValue ? oldValue : defaultValue;
    };
  };

  const handleKeyDown = (input, formatFn, callback) => {
    // input old value.
    let oldValue = input.value;

    const result = formatFn(input.value, oldValue);

    if (typeof result === 'string') {
      input.value = result;
    }

    oldValue = input.value;

    if (callback !== undefined) {
      callback(input, result);
    }
  };

  const executeKeyDown = e => {
    handleKeyDown(e.target, createRegexFormatter(/\SF$/, ' SF'), input => {
      const pos = Math.max(0, input.value.length - 3);
      input.setSelectionRange(pos, pos);
    });
  };

  return (
    <Container margin='1em' display='block'>
      <Container display='block'>
        {/* <label htmlFor={props.id || props.name}>{label}</label> */}
        <label htmlFor={name}>{label}</label>
      </Container>

      <Container display='block'>
        <Input
          type='text'
          ref={inputRef}
          onKeyDown={executeKeyDown}
          name={name}
          placeholder={placeholder}
          {...field}
        />
      </Container>
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </Container>
  );
};

export default FormInputText;
