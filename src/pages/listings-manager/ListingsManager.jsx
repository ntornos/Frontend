import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cleanState, fetchUserListings } from '../../redux/listing/userListing.slice';

const ListingsManager = () => {
  // fetch for all user listings, add them to global state.
  const dispatch = useDispatch();

  const memoizedFetchUserListings = useCallback(async () => {
    await dispatch(fetchUserListings());
    dispatch(cleanState());
  }, [dispatch]);

  useEffect(() => {
    memoizedFetchUserListings();
  }, [memoizedFetchUserListings]);

  // render them
  return <div>Listings manager page</div>;
};

export default ListingsManager;
