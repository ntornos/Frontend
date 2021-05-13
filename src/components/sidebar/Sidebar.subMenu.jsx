import React from 'react';
import { SidebarLabel, SubMenuWrap, SubMenuLink } from './Sidebar.styles';

const SidebarSubMenu = ({ menuItem, isOpen, openDropDown, index, onClose }) => {
  const pathname = window.location.pathname;

  const subNavToggler = () => {
    openDropDown(index);
    onClose(!isOpen);
  };

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
    </>
  );
};

export default SidebarSubMenu;
