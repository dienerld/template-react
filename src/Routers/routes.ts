import React from 'react';
import { Home } from '../pages/Home';
import { Character } from '../pages/Character';

export type TMapRoutes = {
  label?: string;
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
    // without label not render in app bar
    // label: 'Character',

    path: '/character/:id',
    component: Character,
  },
];
