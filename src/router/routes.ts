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
            path: 'departments',
            name: 'departments',
            component: () =>
              import('pages/ManageData/pages/Department/Department.vue'),
          },
          {
            path: 'add-departments',
            name: 'add-departments',
            component: () =>
              import('pages/ManageData/pages/Department/AddDepartment.vue'),
          },
          {
            path: 'import-departments',
            name: 'import-departments',
            component: () =>
              import('pages/ManageData/pages/Department/ImportDepartment.vue'),
          },
          {
            path: 'rooms',
            name: 'rooms',
            component: () => import('pages/ManageData/pages/Rooms/Rooms.vue'),
          },
          {
            path: 'add-rooms',
            name: 'add-rooms',
            component: () =>
              import('pages/ManageData/pages/Rooms/AddRooms.vue'),
          },
          {
            path: 'import-rooms',
            name: 'import-rooms',
            component: () =>
              import('pages/ManageData/pages/Rooms/ImportRooms.vue'),
          },
          {
            path: 'programs',
            name: 'programs',
            component: () =>
              import('pages/ManageData/pages/Programs/Programs.vue'),
          },
          {
            path: 'add-programs',
            name: 'add-programs',
            component: () =>
              import('pages/ManageData/pages/Programs/AddPrograms.vue'),
          },
          {
            path: 'import-programs',
            name: 'import-programs',
            component: () =>
              import('pages/ManageData/pages/Programs/ImportPrograms.vue'),
          },
          {
            path: 'curriculum',
            name: 'curriculum',
            component: () =>
              import('pages/ManageData/pages/Curriculum/Curriculum.vue'),
          },
          {
            path: 'add-curriculum',
            name: 'add-curriculum',
            component: () =>
              import('pages/ManageData/pages/Curriculum/AddCurriculum.vue'),
          },
          {
            path: 'import-curriculum',
            name: 'import-curriculum',
            component: () =>
              import('pages/ManageData/pages/Curriculum/ImportCurriculum.vue'),
          },
          {
            path: 'course-type',
            name: 'course-type',
            component: () =>
              import('pages/ManageData/pages/CourseType/CourseType.vue'),
          },
          {
            path: 'add-course-type',
            name: 'add-course-type',
            component: () =>
              import('pages/ManageData/pages/CourseType/AddCourseType.vue'),
          },
          {
            path: 'import-course-type',
            name: 'import-course-type',
            component: () =>
              import('pages/ManageData/pages/CourseType/ImportCourseType.vue'),
          },
          {
            path: 'courses',
            name: 'courses',
            component: () =>
              import('pages/ManageData/pages/Courses/Courses.vue'),
          },
          {
            path: 'add-courses',
            name: 'add-courses',
            component: () =>
              import('pages/ManageData/pages/Courses/AddCourses.vue'),
          },
          {
            path: 'import-courses',
            name: 'import-courses',
            component: () =>
              import('pages/ManageData/pages/Courses/ImportCourses.vue'),
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
          {
            path: 'add-schedules',
            name: 'add-schedules',
            component: () =>
              import('pages/ManageData/pages/Schedules/AddSchedules.vue'),
          },
          {
            path: 'import-schedules',
            name: 'import-schedules',
            component: () =>
              import('pages/ManageData/pages/Schedules/ImportSchedules.vue'),
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
            path: 'import-admin',
            name: 'import-admin',
            component: () =>
              import('pages/AddAccount/pages/Admin/ImportAdmin.vue'),
          },
          {
            path: 'create-instructor/:fromManageInstructors?',
            name: 'create-instructor',
            component: () =>
              import('pages/AddAccount/pages/Instructor/Instructor.vue'),
            props: true,
          },
          {
            path: 'import-instructor',
            name: 'import-instructor',
            component: () =>
              import('pages/AddAccount/pages/Instructor/ImportInstructor.vue'),
          },
          {
            path: 'create-student/:fromManageStudents?',
            name: 'create-student',
            component: () =>
              import('pages/AddAccount/pages/Student/Student.vue'),
            props: true,
          },
          {
            path: 'import-student',
            name: 'import-student',
            component: () =>
              import('pages/AddAccount/pages/Student/ImportStudent.vue'),
          },
        ],
      },
      {
        path: 'manage-profile',
        name: 'manage-profile',
        component: () =>
          import('src/pages/ManageProfile/layout/ManageProfileLayout.vue'),
        children: [
          {
            path: 'edit-profile',
            name: 'edit-profile',
            component: () =>
              import('pages/ManageProfile/pages/EditProfile/EditProfile.vue'),
          },
          {
            path: 'change-password',
            name: 'change-password',
            component: () =>
              import(
                'pages/ManageProfile/pages/ChangePassword/ChangePassword.vue'
              ),
            props: true,
          },
        ],
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
