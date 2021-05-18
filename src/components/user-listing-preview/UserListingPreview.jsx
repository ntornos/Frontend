import React from 'react';
import { ListingPreviewImage, ListingPreviewCard, ImgContainer } from './UserListingPreview.styles';

const UserListingPreview = ({ listing }) => {
  console.log(listing);
  return (
    <ListingPreviewCard>
      <ImgContainer>
        <ListingPreviewImage alt='listing location' src={listing.mapImg} />
      </ImgContainer>

      <div style={{ padding: '10px' }}>
        <p>{listing.address}</p>
        <p>{listing.price}</p>
        <p>{listing.status}</p>
        <p>{listing.type}</p>
      </div>
    </ListingPreviewCard>
  );
};

export default UserListingPreview;
