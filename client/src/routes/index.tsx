import { createBrowserRouter } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import ProtectedLayout from './ProtectedLayout';
import Dashboard from '../components/Dashboard';

export const router = createBrowserRouter([
  { path: '/login', element: <LogInPage /> },
  { path: '/register', element: <RegisterPage /> },
  {
    element: <ProtectedLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
]);
