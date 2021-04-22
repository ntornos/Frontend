import axios from 'axios';
import { listingsTypes } from './listings.types';

export const addNewListing = data => ({
  type: listingsTypes.ADD_NEW_LISTING,
  data,
});

export const fetchUserListings = () => ({
  type: listingsTypes.FETCH_USER_LISTINGS,
});

export const addNewListingThunk = listingDetails => async dispatch => {
  try {
    const {
      data,
    } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/user-actions/create-listing`,
      listingDetails,
      { withCredentials: true }
    );

    dispatch(addNewListing(data.data));
  } catch (err) {
    console.error('Error at addNewListing:', err);
  }
};
