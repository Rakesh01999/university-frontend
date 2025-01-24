import FacultyDashboard from '../pages/faculty/FacultyDashboard';
import MyCourses from './MyCourses';
import MyStudents from './MyStudents';

export const facultyPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashboard />,
  },
  {
    name: 'My Courses',
    path: 'courses',
    element: <MyCourses />,
  },
  {
    path: 'courses/:registerSemesterId/:courseId',
    element: <MyStudents />,
  },
];