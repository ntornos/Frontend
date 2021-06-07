import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserListingsArr } from '../../redux/listing/userListing.slice';
import MapListingPreview from '../map-listing-preview/MapListingPreview';
import { SidebarContainer, SidebarWrap, SidebarItemsContainer } from './MapSidebar.styles';

const TogglableSidebar = ({ children }) => {
  const listings = useSelector(selectCurrentUserListingsArr);

  return (
    <SidebarContainer>
      <SidebarWrap>
        {children}
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
