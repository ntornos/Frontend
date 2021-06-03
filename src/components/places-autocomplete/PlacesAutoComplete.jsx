import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import {
  PlacesAutoCompleteLI,
  PlacesAutoCompleteContainer,
  PlacesAutoCompleteInput,
  PlacesAutoCompleteUL,
  PlacesAutoCompleteButton,
} from './PlacesAutoComplete.styles';
import { Container, Text } from '../UtilityComponents';

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    cache: false,
    requestOptions: {
      componentRestrictions: { country: 'do' },
    },
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      console.log(description);
      setValue(description, false);
      clearSuggestions();

      // send the user to /search where we will have the map and listed listings for the sector passed in.
    };

  const renderSuggestions = () => {
    const actualData = data.filter(suggestionn => {
      let shouldBeAdded;
      const secondaryText = suggestionn.structured_formatting.secondary_text;

      if (secondaryText && secondaryText.includes('Dominican Republic')) {
        shouldBeAdded = suggestionn;
      }

      if (shouldBeAdded && shouldBeAdded.types.includes('political')) return shouldBeAdded;

      return null;
    });

    return actualData.map(suggestion => {
      console.log(suggestion);
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <PlacesAutoCompleteLI key={place_id} onClick={handleSelect(suggestion)}>
          <Text fontColor='black' fontSize='1rem'>
            {main_text},
          </Text>{' '}
          <Text fontColor='black' fontSize='0.8rem'>
            {secondary_text}
          </Text>
        </PlacesAutoCompleteLI>
      );
    });
  };

  return (
    <PlacesAutoCompleteContainer ref={ref}>
      {/* <Container width='80%' position='relative'> */}
      <PlacesAutoCompleteInput
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Ensanche Naco, Santo Domingo'
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      <PlacesAutoCompleteButton>Search</PlacesAutoCompleteButton>

      {status === 'OK' && (
        <Container>
          <PlacesAutoCompleteUL>{renderSuggestions()}</PlacesAutoCompleteUL>
        </Container>
      )}

      {/* </Container> */}
    </PlacesAutoCompleteContainer>
  );
};

export default PlacesAutocomplete;
