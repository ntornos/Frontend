import React, { useState } from 'react';

import { SideBarData } from './Sidebar.data';
import { SidebarNav, SidebarWrap } from './Sidebar.styles';
import SidebarSubMenu from './Sidebar.subMenu';

const Sidebar = () => {
  const [dropDownOpened, setDropDownOpened] = useState(0);

  return (
    <SidebarNav>
      <SidebarWrap>
        {SideBarData.map((item, idx) => {
          return (
            <SidebarSubMenu
              isOpen={idx === dropDownOpened}
              openDropDown={setDropDownOpened}
              menuItem={item}
              index={idx}
              key={idx}
            />
          );
        })}
      </SidebarWrap>
    </SidebarNav>
  );
};

export default Sidebar;
