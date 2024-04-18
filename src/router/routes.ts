import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('pages/Dashboard/Dashboard.vue'),
      },
      {
        path: 'timetable',
        name: 'timetable',
        component: () =>
          import('pages/Timetable/layout/TimtableMainLayout.vue'),
        children: [
          {
            path: 'instructor',
            name: 'instructor',
            component: () =>
              import('pages/Timetable/pages/Instructor/Instructor.vue'),
          },
          {
            path: 'student',
            name: 'student',
            component: () =>
              import('pages/Timetable/pages/Student/Student.vue'),
          },
          {
            path: 'room',
            name: 'room',
            component: () => import('pages/Timetable/pages/Room/Room.vue'),
          },
        ],
      },
      {
        path: 'manage-data',
        name: 'manage-data',
        component: () => import('pages/ManageData/layout/ManageDataLayout.vue'),
        children: [
          {
            path: 'rooms',
            name: 'rooms',
            component: () => import('pages/ManageData/pages/Rooms/Rooms.vue'),
          },
          {
            path: 'programs',
            name: 'programs',
            component: () =>
              import('pages/ManageData/pages/Programs/Programs.vue'),
          },
          {
            path: 'curriculum',
            name: 'curriculum',
            component: () =>
              import('pages/ManageData/pages/Curriculum/Curriculum.vue'),
          },
          {
            path: 'course-type',
            name: 'course-type',
            component: () =>
              import('pages/ManageData/pages/CourseType/CourseType.vue'),
          },
          {
            path: 'courses',
            name: 'courses',
            component: () =>
              import('pages/ManageData/pages/Courses/Courses.vue'),
          },
          {
            path: 'students',
            name: 'students',
            component: () =>
              import('pages/ManageData/pages/Students/Students.vue'),
          },
          {
            path: 'instructors',
            name: 'instructors',
            component: () =>
              import('pages/ManageData/pages/Instructors/Instructors.vue'),
          },
          {
            path: 'instructors',
            name: 'instructors',
            component: () =>
              import('pages/ManageData/pages/Instructors/Instructors.vue'),
          },
          {
            path: 'schedules',
            name: 'schedules',
            component: () =>
              import('pages/ManageData/pages/Schedules/Schedules.vue'),
          },
        ],
      },
      {
        path: 'add-accounts',
        name: 'add-accounts',
        component: () =>
          import('pages/AddAccount/layout/AddAccountMainLayout.vue'),
        children: [
          {
            path: 'create-admin',
            name: 'create-admin',
            component: () => import('pages/AddAccount/pages/Admin/Admin.vue'),
          },
          {
            path: 'create-instructor',
            name: 'create-instructor',
            component: () =>
              import('pages/AddAccount/pages/Instructor/Instructor.vue'),
          },
          {
            path: 'create-student',
            name: 'create-student',
            component: () =>
              import('pages/AddAccount/pages/Student/Student.vue'),
          },
        ],
      },
      {
        path: 'manage-profile',
        name: 'manage-profile',
        component: () => import('pages/ManageProfile/ManageProfile.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login/Login.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
