import React, { useState } from 'react';

import { SideBarData } from './Sidebar.data';
import { SidebarNav, SidebarWrap } from './SideBar.styles';
import SidebarSubMenu from './Sidebar.subMenu';

const Sidebar = () => {
  const [dropDownOpened, setDropDownOpened] = useState(0);
  const [toggleDropDown, setToggleDropDown] = useState(!dropDownOpened && true);

  return (
    <SidebarNav>
      <SidebarWrap>
        {SideBarData.map((item, idx) => {
          return (
            <SidebarSubMenu
              isOpen={idx === dropDownOpened && toggleDropDown}
              onClose={setToggleDropDown}
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
