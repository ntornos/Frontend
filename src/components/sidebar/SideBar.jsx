import React, { useState } from 'react';

import { SideBarData } from './Sidebar.data';
import { SidebarNav, SidebarWrap } from './Sidebar.styles';
import SidebarSubMenu from './Sidebar.subMenu';

const Sidebar = () => {
  return (
    <SidebarNav>
      <SidebarWrap>
        {SideBarData.map((item, idx) => {
          return <SidebarSubMenu menuItem={item} key={idx} />;
        })}
      </SidebarWrap>
    </SidebarNav>
  );
};

export default Sidebar;
