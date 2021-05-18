import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteListing } from '../../redux/listing/userListing.slice';

export const ListingPreviewOptionsData = [
  {
    text: 'Delete Listing',
    onClick: id => deleteListing(id),
  },
  // {
  //   text: 'Delete Listing',
  //   onClick: id => deleteListing(id),
  // },
];
