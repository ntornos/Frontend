import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { GlobalWrapper } from '../../components/UtilityComponents';
import { ListingsManagerHeader } from '../listings-manager/ListingsManager.styles';

const ListingEdit = () => {
  return (
    <GlobalWrapper>
      <ListingsManagerHeader />
      <Sidebar />
    </GlobalWrapper>
  );
};

export default ListingEdit;
