import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppTable = Loadable(lazy(() => import('./tables/AppTable')));
const AppForm = Loadable(lazy(() => import('./forms/AppForm')));
const BookAppointment = Loadable(lazy(() => import("./BookAppointment/BookAppointment")));
const MarkAttendance = Loadable(lazy(() => import("./MarkAttendance/MarkAttendance")));
const AppointmentHistory = Loadable(lazy(() => import("./AppointmentHistory/AppointmentHistory")));
const ViewPatient = Loadable(lazy(() => import("./ViewPatient/ViewPatient")));
const TodaysAppointment = Loadable(lazy(() => import("./TodaysAppointment/TodaysAppointment")));
const CreateStaff = Loadable(lazy(() => import("./CreateStaff/CreateStaff")));
const MyStaff = Loadable(lazy(() => import("./MyStaff/MyStaff")));
const MyReport = Loadable(lazy(() => import("./MyReport/MyReport")));
const Share = Loadable(lazy(() => import("./Share/Share")));
const GiveFeedback = Loadable(lazy(() => import("./GiveFeedback/GiveFeedback")));
const Support = Loadable(lazy(() => import("./Support/Support")));
const Logout = Loadable(lazy(() => import("./Logout/Logout")));

const materialRoutes = [
  {
    path: '/table',
    element: <AppTable />,
  },
  {
    path: '/material/form',
    element: <AppForm />,
  },
  {
    path: '/book-appointment',
    element: <BookAppointment />,
  },
  {
    path: '/mark-attendance',
    element: <MarkAttendance />,
  },
  {
    path: '/appointment-history',
    element: <AppointmentHistory />,
  },
  {
    path: '/view-patient',
    element: <ViewPatient />,
  },
  {
    path: '/todays-appointment',
    element: <TodaysAppointment />,
  },
  {
    path: '/create-staff',
    element: <CreateStaff />,
  },
  {
    path: '/my-staff',
    element: <MyStaff />,
  },
  {
    path: '/my-report',
    element: <MyReport />,
  },
  {
    path: '/share',
    element: <Share />,
  },
  {
    path: '/give-feedback',
    element: <GiveFeedback />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
];

export default materialRoutes;
