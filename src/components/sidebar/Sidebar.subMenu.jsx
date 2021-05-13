import React, { useState } from 'react';
import { SidebarLabel, SubMenuWrap, SubMenuLink, Div } from './Sidebar.styles';

const SidebarSubMenu = ({ menuItem, isOpen, openDropDown, index, onClose }) => {
  const [toggleSubNav, setToggleSubNav] = useState(true);

  const pathname = window.location.pathname;

  const subNavToggler = () => {
    openDropDown(index);
    onClose(!isOpen);
  };

  // only one opens at a time, but it won't close when the one that's open is clicked.

  return (
    <>
      <SubMenuWrap onClick={menuItem.subNav && subNavToggler}>
        <div>
          {menuItem.icon}
          <SidebarLabel>{menuItem.title}</SidebarLabel>
          {/* <SidebarLink to={menuItem.path} /> */}
        </div>
        <div>
          {menuItem.subNav && isOpen
            ? menuItem.iconOpened
            : menuItem.subNav
            ? menuItem.iconClosed
            : null}
        </div>
      </SubMenuWrap>

      <Div>
        {isOpen &&
          menuItem.subNav.map((subMenuItem, idx) => {
            return (
              <SubMenuLink
                to={subMenuItem.path}
                className={pathname === subMenuItem.path && 'active'}
                key={idx}>
                {subMenuItem.icon}
                <SidebarLabel>{subMenuItem.title}</SidebarLabel>
              </SubMenuLink>
            );
          })}
      </Div>
    </>
  );
};

export default SidebarSubMenu;
