import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NotFound = Loadable(lazy(() => import('./NotFound')));
const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')));
const JwtLogin = Loadable(lazy(() => import('./JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('./JwtRegister')));
const AdminRegistration = Loadable(lazy(() => import('./AdminRegistration')));
const ClinicPage = Loadable(lazy(() => import('ClinicPage/ClinicPage')));

const sessionRoutes = [
  { path: '/signin', element: <JwtLogin /> },
  { path: '/signup', element: <JwtRegister /> },
  { path: '/admin-registration', element: <AdminRegistration /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },
  { path: '/session/404', element: <NotFound /> },
  { path: '/', element: <ClinicPage /> },

];

export default sessionRoutes;
