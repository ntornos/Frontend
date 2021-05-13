import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/sidebar/Sidebar';
import {
  cleanState,
  fetchUserListings,
  selectCurrentUserListings,
  selectUserListings,
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
} from './ListingsManager.styles';
import { Container, Text } from '../../components/UtilityComponents';

const ListingsManager = () => {
  const dispatch = useDispatch();

  // fetch for all user listings, add them to global state.
  const memoizedFetchUserListings = useCallback(async () => {
    await dispatch(fetchUserListings());
    dispatch(cleanState());
  }, [dispatch]);

  useEffect(() => {
    memoizedFetchUserListings();
  }, [memoizedFetchUserListings]);

  const userListings = useSelector(selectCurrentUserListingsArr);
  const totalUserListings = useSelector(selectListingCount);

  return (
    <Container justify='flex-end' display='flex'>
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
        {!!userListings.length &&
          userListings.map(listing => {
            return (
              <div key={listing._id}>
                <p>{listing.title}</p>
              </div>
            );
          })}
      </MainContent>
    </Container>
  );
};

export default ListingsManager;
