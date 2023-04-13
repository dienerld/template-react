import { Route, Routes } from 'react-router-dom';
import { Hello } from '../components/Hello';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
    </Routes>
  );
}
