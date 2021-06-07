import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectListingInProcessId,
  setListingInProcess,
  selectListingInProcess,
  cleanState,
} from '../../redux/listing/userListing.slice';

import ListingEditRentForm from '../../components/listing-edit-forms/ListingEditRentForm';
import ListingEditSaleForm from '../../components/listing-edit-forms/ListingEditSaleForm';
import FormInputIcons from '../../components/form-input-icons/FormInputIcons';
import Spinner from '../../components/spinner/Spinner';
import Sidebar from '../../components/sidebar/Sidebar';
import { Container, GlobalWrapper, Text } from '../../components/UtilityComponents';

import { ListingEditDivider, ListingEditContainer } from './ListingEdit.styles';
import { ListingsManagerHeader, MainContent } from '../listings-manager/ListingsManager.styles';

const ListingEdit = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);

  const listing = location.state;

  const listingInProcessId = useSelector(selectListingInProcessId);
  const [listingStatus, setListingStatus] = useState(listing.status);

  const dispatch = useDispatch();

  useEffect(() => {
    const changeListingInProcess = async () => {
      await dispatch(setListingInProcess(listing._id));
      dispatch(cleanState());
    };
    if (listingInProcessId !== listing._id) {
      changeListingInProcess();
    }
    // temporary timeout to check spinner
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return clearTimeout();
  }, [listingInProcessId, listing._id, dispatch]);

  const listingInProcess = useSelector(selectListingInProcess);

  return (
    <GlobalWrapper overflow='hidden'>
      <ListingsManagerHeader />
      <Sidebar />

      {/* We should have two different edit screens, one for rent one for sale. */}
      <MainContent>
        <ListingEditContainer>
          <Container margin='2rem 0'>
            <Text fontSize='1.25rem'>
              {listingInProcess.type} at {listingInProcess.address}
            </Text>
          </Container>
          <ListingEditDivider />

          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Container margin='2rem 0' display='flex'>
                <FormInputIcons
                  onClick={() => setListingStatus('RENT')}
                  iconName='forRent'
                  label='Rent'
                  checked={listingStatus === 'RENT'}
                />
                <FormInputIcons
                  onClick={() => setListingStatus('SALE')}
                  iconName='forSale'
                  label='Sale'
                  checked={listingStatus === 'SALE'}
                />
              </Container>
              <ListingEditDivider />

              <Container margin='2rem 0'>
                <Text fontSize='1.25rem'>Basic Info</Text>
              </Container>
              {listingStatus === 'RENT' ? (
                <Container margin='2rem 0'>
                  <ListingEditRentForm listingStatus={listingStatus} listing={listing} />
                </Container>
              ) : (
                <Container margin='2rem 0'>
                  <ListingEditSaleForm listingStatus={listingStatus} />
                </Container>
              )}
            </>
          )}
        </ListingEditContainer>
      </MainContent>
    </GlobalWrapper>
  );
};

export default ListingEdit;
