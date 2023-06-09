import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export function Routers() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}
