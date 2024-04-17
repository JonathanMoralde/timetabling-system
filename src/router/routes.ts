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
        component: () => import('pages/Timetable/Timetable.vue'),
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
        component: () => import('pages/AddAccount/AddAccount.vue'),
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
