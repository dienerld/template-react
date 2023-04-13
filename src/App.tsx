import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Routers } from './Routers/Routers';
import { DefaultLayout } from './config/layout/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <DefaultLayout>
        <Routers />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
