import React, { useState } from 'react';
import { SidebarLabel, SidebarLink, SidebarWrap, SubMenuWrap, SubMenuLink } from './Sidebar.styles';

const SidebarSubMenu = ({ menuItem }) => {
  const [toggleSubNav, setToggleSubNav] = useState(false);
  const pathname = window.location.pathname;
  console.log(pathname);
  const subNavToggler = () => setToggleSubNav(!toggleSubNav);

  return (
    <>
      <SubMenuWrap onClick={menuItem.subNav && subNavToggler}>
        <div>
          {menuItem.icon}
          <SidebarLabel>{menuItem.title}</SidebarLabel>
          {/* <SidebarLink to={menuItem.path} /> */}
        </div>
        <div>
          {menuItem.subNav && toggleSubNav
            ? menuItem.iconOpened
            : menuItem.subNav
            ? menuItem.iconClosed
            : null}
        </div>
      </SubMenuWrap>
      {toggleSubNav &&
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
    </>
  );
};

export default SidebarSubMenu;
