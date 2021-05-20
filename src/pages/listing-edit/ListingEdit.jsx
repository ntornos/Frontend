import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { GlobalWrapper } from '../../components/UtilityComponents';
import { ListingsManagerHeader, MainContent } from '../listings-manager/ListingsManager.styles';

const ListingEdit = () => {
  return (
    <GlobalWrapper>
      <ListingsManagerHeader />
      <Sidebar />

      {/* We should have two different edit screens, one for rent one for sale. */}
      <MainContent></MainContent>
    </GlobalWrapper>
  );
};

export default ListingEdit;
