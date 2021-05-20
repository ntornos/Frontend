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
