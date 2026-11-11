import { createBrowserRouter } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import ProtectedLayout from './ProtectedLayout';
import CategoryList from '../pages/CategoryList';
import ActivityList from '../pages/ActivityList';

export const router = createBrowserRouter([
  { path: '/login', element: <LogInPage /> },
  { path: '/register', element: <RegisterPage /> },
  {
    element: <ProtectedLayout />,
    children: [
      { path: '/', element: <ActivityList /> },
      { path: '/activities', element: <ActivityList /> },
      { path: '/categories', element: <CategoryList /> },
    ],
  },
]);
