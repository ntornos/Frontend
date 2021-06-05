import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserListingsArr } from '../../redux/listing/userListing.slice';
import MapListingPreview from '../map-listing-preview/MapListingPreview';
import { SidebarContainer, SidebarWrap, SidebarItemsContainer } from './TogglableSidebar.styles';

const TogglableSidebar = () => {
  const listings = useSelector(selectCurrentUserListingsArr);
  console.log(listings);
  return (
    <SidebarContainer>
      <SidebarWrap>
        <SidebarItemsContainer>
          {listings.map((item, idx) => (
            <MapListingPreview key={idx} item={item} />
          ))}
        </SidebarItemsContainer>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default TogglableSidebar;
