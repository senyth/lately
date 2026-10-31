import { Navigate, Outlet } from 'react-router-dom';
import MainLayout from '../shared/theme/MainLayout';
import { useAuth } from '../hooks/useAuth';
import FullPageSpinner from '../components/FullPageSpinner';

export default function ProtectedLayout() {
  const { user, isPending } = useAuth();

  if (isPending) return <FullPageSpinner />;

  if (user) {
    return (
      <MainLayout>
        <Outlet />
      </MainLayout>
    );
  } else {
    return <Navigate to="/login" replace />;
  }
}
