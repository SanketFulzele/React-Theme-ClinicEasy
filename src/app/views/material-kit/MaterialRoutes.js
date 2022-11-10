import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const BookAppointment = Loadable(lazy(() => import("./BookAppointment/BookAppointment")));
const MarkAttendance = Loadable(lazy(() => import("./MarkAttendance/MarkAttendance")));
const AppointmentHistory = Loadable(lazy(() => import("./AppointmentHistory/AppointmentHistory")));
const ViewPatient = Loadable(lazy(() => import("./ViewPatient/ViewPatient")));
const TodaysAppointment = Loadable(lazy(() => import("./TodaysAppointment/TodaysAppointment")));
const CreateStaff = Loadable(lazy(() => import("./CreateStaff/CreateStaff")));
const MyStaff = Loadable(lazy(() => import("./MyStaff/MyStaff")));
const Share = Loadable(lazy(() => import("./Share/Share")));
const GiveFeedback = Loadable(lazy(() => import("./GiveFeedback/GiveFeedback")));
const Support = Loadable(lazy(() => import("./Support/Support")));
const Logout = Loadable(lazy(() => import("./Logout/Logout")));

// Extra Pages
const BookNewAppointment = Loadable(lazy(() => import("./BookAppointment/BookNewAppointment/BookNewAppointment")));
const AddPatient = Loadable(lazy(() => import("./ViewPatient/AddPatient/AddPatient")));
const PatientDetail = Loadable(lazy(() => import("./ViewPatient/PatientDetail/PatientDetail")));
const ProfilePage = Loadable(lazy(() => import("./ProfilePage/ProfilePage")));
const StaffAttendance = Loadable(lazy(() => import('./MyStaff/StaffAttendance/StaffAttendance')));

const materialRoutes = [
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
    path: '/staff-attendance',
    element: <StaffAttendance />,
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
  {
    path: '/book-new-appointment',
    element: <BookNewAppointment />,
  },
  {
    path: '/add-patient',
    element: <AddPatient />,
  },
  {
    path: '/patient-detail',
    element: <PatientDetail />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
];

export default materialRoutes;
