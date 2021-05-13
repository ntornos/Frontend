import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/sidebar/Sidebar';
import { cleanState, fetchUserListings } from '../../redux/listing/userListing.slice';
import { MainContent, MainContentHeader, Button } from './ListingsManager.styles';
import { Container, Text } from '../../components/UtilityComponents';

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
  return (
    <Container justify='flex-end' display='flex'>
      <Sidebar />

      <MainContent>
        {/* Main Content Header containing name of page, add property button, filtering */}
        <MainContentHeader>
          <Text fontWeight='200' fontSize='30px'>
            Listings Manager
          </Text>
          <Button width='15%'>Add Property</Button>
        </MainContentHeader>

        {/* map for each user listing */}
      </MainContent>
    </Container>
  );
};

export default ListingsManager;
