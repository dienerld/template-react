import React from 'react';
import { Home } from '../pages/Home';
import { About } from '../pages/About';

export type TMapRoutes = {
  label: string;
  path: string;
  // eslint-disable-next-line no-undef
  component: React.FC;
};

export const routes: TMapRoutes[] = [
  {
    label: 'Home',
    path: '/',
    component: Home,
  },
  {
    label: 'About',
    path: '/about',
    component: About,
  },
];
