import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Routers } from './Routers/Routers';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
