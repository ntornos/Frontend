import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const SideBarData = [
  {
    title: 'Listings',
    // path: '/myntornos/listings-manager',
    icon: <BiIcons.BiBuildingHouse />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Listings/Properties',
        path: '/myntornos/listings-manager',
        // icon: <BiIcons.BiBuildingHouse />,
      },
      {
        title: 'Reviews',
        path: '/myntornos/listings-manager/reviews',
        // icon: <BiIcons.BiBuildingHouse />,
      },
    ],
  },
  {
    title: 'Test Menu',
    // path: '/myntornos/listings-manager',
    icon: <BiIcons.BiBuildingHouse />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Yeah',
        path: '/myntornos/',
        // icon: <BiIcons.BiBuildingHouse />,
      },
      {
        title: 'Hello',
        path: '/myntornos/',
        // icon: <BiIcons.BiBuildingHouse />,
      },
    ],
  },
];
