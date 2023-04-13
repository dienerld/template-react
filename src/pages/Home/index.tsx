import { Grid } from '@mui/material';
import React from 'react';
import TitlePage from '../../components/TitlePage';

export const Home: React.FC = () => {
  return (
    <Grid container>
      <Grid item>
        <TitlePage title="Home" />
      </Grid>
    </Grid>
  );
};
