import AssessmentIcon from '@mui/icons-material/Assessment';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import { ReactNode } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Dashboard',
        icon: MmsTwoToneIcon,
        link: '/dashboards/kpi'
      },
      {
        name: 'Services',
        icon: AssessmentIcon,
        link: '/content/services'
      },
      {
        name: 'Settings',
        icon: SettingsIcon,
        link: '/dashboards/settings'
      },
    ]
  },
  /* ,
  {
    heading: 'Management',
    items: [
      {
        name: 'Transactions',
        icon: TableChartTwoToneIcon,
        link: '/management/transactions'
      },
      {
        name: 'User Profile',
        icon: AccountCircleTwoToneIcon,
        link: '/management/profile',
        items: [
          {
            name: 'Profile Details',
            link: '/management/profile/details'
          },
          {
            name: 'User Settings',
            link: '/management/profile/settings'
          }
        ]
      }
    ]
  },
  {
    heading: 'Components',
    items: [
      {
        name: 'Buttons',
        icon: BallotTwoToneIcon,
        link: '/components/buttons'
      },
      {
        name: 'Modals',
        icon: BeachAccessTwoToneIcon,
        link: '/components/modals'
      },
      {
        name: 'Accordions',
        icon: EmojiEventsTwoToneIcon,
        link: '/components/accordions'
      },
      {
        name: 'Tabs',
        icon: FilterVintageTwoToneIcon,
        link: '/components/tabs'
      },
      {
        name: 'Badges',
        icon: HowToVoteTwoToneIcon,
        link: '/components/badges'
      },
      {
        name: 'Tooltips',
        icon: LocalPharmacyTwoToneIcon,
        link: '/components/tooltips'
      },
      {
        name: 'Avatars',
        icon: RedeemTwoToneIcon,
        link: '/components/avatars'
      },
      {
        name: 'Cards',
        icon: SettingsTwoToneIcon,
        link: '/components/cards'
      },
      {
        name: 'Forms',
        icon: TrafficTwoToneIcon,
        link: '/components/forms'
      },
    ]
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        name: 'Status',
        icon: VerifiedUserTwoToneIcon,
        link: '/status',
        items: [
          {
            name: 'Error 404',
            link: '/status/404'
          },
          {
            name: 'Error 500',
            link: '/status/500'
          },
          {
            name: 'Maintenance',
            link: '/status/maintenance'
          },
          {
            name: 'Coming Soon',
            link: '/status/coming-soon'
          }
        ]
      }
    ]
  } */
];

export default menuItems;
