import { Outlet } from 'react-router-dom';
import MainLayout from '../shared/theme/MainLayout';

export default function ProtectedLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
