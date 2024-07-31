import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { IMenuItem } from '../types';
import { ROUTES } from './routes';

export const MENU_LIST: IMenuItem[] = [
  
  {
    route: ROUTES.main,
    literal: 'Dashboard',
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.citas,
    literal: 'Citas',
    Icon: CalendarMonthIcon,
  },
  // {
  //   route: ROUTES.orders,
  //   literal: 'Orders',
  //   Icon: ShoppingCartIcon,
  // },
  // {
  //   route: ROUTES.customers,
  //   literal: 'Customers',
  //   Icon: PeopleIcon,
  // },
  // {
  //   route: ROUTES.inventory,
  //   literal: 'Inventory',
  //   Icon: AttachMoneyIcon,
  // },
];
