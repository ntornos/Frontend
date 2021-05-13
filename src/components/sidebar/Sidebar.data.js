import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
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
        title: 'Upload Listing',
        path: '/myntornos/create-listing',
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
