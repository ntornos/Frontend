import React, { useState } from 'react';
import {
  ListingPreviewImage,
  ListingPreviewCard,
  ImgContainer,
  UserListingPreviewOptionsBtn,
  MiniModal,
  MiniModalButton,
  ListingPreviewDetailsContainer,
  ListingPreviewDetailsText,
  ListingEditLink,
} from './UserListingPreview.styles';
import * as BsIcons from 'react-icons/bs';
import { ListingPreviewOptionsData } from './UserListingPreviewOptions.data';
import { useDispatch } from 'react-redux';

const UserListingPreview = ({ listing }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const dispatcher = cb => dispatch(cb);

  return (
    <ListingPreviewCard>
      <UserListingPreviewOptionsBtn onClick={() => setShowModal(!showModal)}>
        <BsIcons.BsThreeDots size={24} />
      </UserListingPreviewOptionsBtn>
      {showModal && (
        <MiniModal>
          {ListingPreviewOptionsData.map((option, idx) => {
            return (
              <MiniModalButton onClick={() => dispatcher(option.onClick(listing._id))} key={idx}>
                {option.text}
              </MiniModalButton>
            );
          })}
        </MiniModal>
      )}
      <ImgContainer>
        <ListingPreviewImage alt='listing location' src={listing.mapImg} />
      </ImgContainer>
      <ListingPreviewDetailsContainer>
        <ListingEditLink to={`/myntornos/listing-manager/edit-listing/${listing._id}`}>
          {listing.address}
        </ListingEditLink>

        <ListingPreviewDetailsText>
          Archived: {listing.archived ? 'Yes' : 'No'}
        </ListingPreviewDetailsText>
        <ListingPreviewDetailsText>
          Status: {listing.status === 'RENT' ? 'Rent' : 'Sale'}
        </ListingPreviewDetailsText>
        <ListingPreviewDetailsText>Type: {listing.type}</ListingPreviewDetailsText>
      </ListingPreviewDetailsContainer>
    </ListingPreviewCard>
  );
};

export default UserListingPreview;
