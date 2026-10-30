import { createBrowserRouter } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import MainLayout from '../shared/theme/MainLayout';

export const router = createBrowserRouter([
  { path: '/login', element: <LogInPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/', element: <MainLayout /> },
]);
