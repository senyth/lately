import { createBrowserRouter } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';

export const router = createBrowserRouter([
  { path: '/login', element: <LogInPage /> },
  { path: '/register', element: <RegisterPage /> },
]);
