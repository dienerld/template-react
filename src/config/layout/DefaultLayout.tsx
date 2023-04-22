import { Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Grid container maxWidth="100vw">
      <Grid item xs={12}>
        <ResponsiveAppBar />
      </Grid>

      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
