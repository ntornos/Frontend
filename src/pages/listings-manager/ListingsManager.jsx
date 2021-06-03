import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../components/sidebar/Sidebar';
import {
  cleanState,
  fetchUserListings,
  selectCurrentUserListingsArr,
  selectListingCount,
} from '../../redux/listing/userListing.slice';
import {
  MainContent,
  MainContentHeader,
  Button,
  MainContentSubHeader,
  FilterContainer,
  ListingSectionTitle,
  ListingsManagerHeader,
  ListingSectionContainer,
} from './ListingsManager.styles';
import { Text, GlobalWrapper } from '../../components/UtilityComponents';
import UserListingPreview from '../../components/user-listing-preview/UserListingPreview';

const ListingsManager = () => {
  const userListings = useSelector(selectCurrentUserListingsArr);
  const totalUserListings = useSelector(selectListingCount);

  const dispatch = useDispatch();

  // find a way to limit the useEffect to only call once.
  const memoizedFetchUserListings = useCallback(async () => {
    await dispatch(fetchUserListings());
    dispatch(cleanState());
  }, [dispatch]);

  // fettch user listings here, maybe?

  useEffect(() => {
    if (!totalUserListings) {
      memoizedFetchUserListings();
    }
  }, [memoizedFetchUserListings, totalUserListings]);

  return (
    <GlobalWrapper>
      <ListingsManagerHeader />
      <Sidebar />

      <MainContent>
        {/* Main Content Header containing name of page, add property button */}
        <MainContentHeader>
          <Text fontWeight='200' fontSize='30px'>
            Listings Manager
          </Text>
          <Button to='/myntornos/create-listing' width='15%'>
            Add Property
          </Button>
        </MainContentHeader>

        {/* filtering section */}
        <MainContentSubHeader>
          <FilterContainer>Filters here</FilterContainer>
        </MainContentSubHeader>

        {/* Listings sub title, displays amount of listings displayed */}
        <ListingSectionTitle>
          <Text>Showing {totalUserListings} Listings</Text>
        </ListingSectionTitle>

        {/* map for each user listing */}
        <ListingSectionContainer>
          {!!userListings.length &&
            userListings.map(listing => {
              return <UserListingPreview key={listing._id} listing={listing} />;
            })}
        </ListingSectionContainer>
      </MainContent>
    </GlobalWrapper>
  );
};

export default ListingsManager;
