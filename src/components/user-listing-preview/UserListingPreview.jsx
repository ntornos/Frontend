import React from 'react';
import Card from '../card/Card';

const UserListingPreview = ({ listing }) => {
  return (
    <Card>
      <img alt='listing location' />
      <div key={listing._id}>
        <p>{listing.title}</p>
      </div>
    </Card>
  );
};

export default UserListingPreview;
