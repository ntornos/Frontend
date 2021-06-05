import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import {
  PlacesAutoCompleteLI,
  PlacesAutoCompleteContainer,
  PlacesAutoCompleteInput,
  PlacesAutoCompleteUL,
} from './PlacesAutoComplete.styles';
import { Container, Text } from '../UtilityComponents';

const PlacesAutocomplete = ({
  children,
  className,
  name,
  handleChange,
  setFieldValue,
  handleLatLng,
  setSearchValue,
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
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
    name && handleChange && handleChange(e);
  };

  const handleSelect = async ({ description }) => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);

    // FORM CASES
    // set the field value onSelect
    setFieldValue && setFieldValue(name, description);
    // this case was necessary for create-listing form where we render a map with latLng
    handleLatLng && handleLatLng(description, setFieldValue);

    // send the user to /search where we will have the map and listed listings for the sector passed in.
    setSearchValue && setSearchValue(description);

    clearSuggestions();

    // dispatch an action that loads all the listing in the selected addresses.
  };

  const renderSuggestions = () => {
    return data
      .filter(suggestion => suggestion.types.includes('political'))
      .map(suggestion => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;

        return (
          <PlacesAutoCompleteLI
            className={className}
            key={place_id}
            onClick={e => handleSelect(suggestion)}>
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
    <PlacesAutoCompleteContainer className={className} ref={ref}>
      <PlacesAutoCompleteInput
        className={className}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Ensanche Naco, Santo Domingo'
        name={name}
      />
      {/* if we need a button pass it as children */}
      {children}

      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && (
        <Container>
          <PlacesAutoCompleteUL className={className}>{renderSuggestions()}</PlacesAutoCompleteUL>
        </Container>
      )}
    </PlacesAutoCompleteContainer>
  );
};

export default PlacesAutocomplete;
