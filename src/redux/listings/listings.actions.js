import axios from 'axios';
import { listingsTypes } from './listings.types';

export const addNewListing = data => ({
  type: listingsTypes.ADD_NEW_LISTING,
  data,
});

export const addNewListingThunk = listingDetails => async dispatch => {
  try {
    const {
      data: { data },
    } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/user-actions/create-listing`,
      listingDetails,
      { withCredentials: true }
    );

    console.log(data);

    dispatch(addNewListing(data));
  } catch (err) {
    console.error('Error at addNewListing:', err);
  }
};
