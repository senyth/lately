import { createBrowserRouter } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import ProtectedLayout from './ProtectedLayout';
import ActivitiesPage from '../pages/ActivitiesPage';
import CategoriesPage from '../pages/CategoriesPage';

export const router = createBrowserRouter([
  { path: '/login', element: <LogInPage /> },
  { path: '/register', element: <RegisterPage /> },
  {
    element: <ProtectedLayout />,
    children: [
      { path: '/', element: <ActivitiesPage /> },
      { path: '/activities', element: <ActivitiesPage /> },
      { path: '/categories', element: <CategoriesPage /> },
    ],
  },
]);
