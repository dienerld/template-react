import React from 'react';
import { Grid } from '@mui/material';
import TitlePage from '../../components/TitlePage';

export const Character: React.FC = () => {
  return (
    <Grid container>
      <Grid item>
        <TitlePage title="About" />
      </Grid>
    </Grid>
  );
};
