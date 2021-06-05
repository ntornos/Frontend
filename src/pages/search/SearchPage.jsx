import React, { useState } from 'react';
import NavBar from '../../components/navbar/NavBar';
import TogglableSidebar from '../../components/togglable-sidebar/TogglableSidebar';

import { GlobalWrapper, Text } from '../../components/UtilityComponents';

const SearchPage = ({ location }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <GlobalWrapper>
      <NavBar />

      {showSidebar && <TogglableSidebar />}
      {/* <Text>WOW ITS A MAP</Text> */}
      {/* <Text>WOW LISTINGS AT {location.state}</Text> */}
    </GlobalWrapper>
  );
};

export default SearchPage;
