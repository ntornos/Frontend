import React, { useState } from 'react';
import { Container } from '../UtilityComponents';
import { SideBarButton, SideBarAside } from './SideBar.styles';

const SideBar = () => {
  // have state describe which are is being clicked to toggle.
  const [sectionOpen, setSectionOpen] = useState('listings');

  // have state to check if active or hidden
  const [toggleOpenClose, setToggleOpenClose] = useState(true);

  return (
    <SideBarAside>
      <section>
        <SideBarButton onClick={() => {}} className={`${toggleOpenClose} `}>
          Listings
        </SideBarButton>
        <Container>
          <ul>
            <li>Listings</li>
            <li>Reviews</li>
          </ul>
        </Container>
      </section>
    </SideBarAside>
  );
};

export default SideBar;
