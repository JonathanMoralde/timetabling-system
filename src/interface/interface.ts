// FOR SY SEM
export interface SYSem {
  school_year_semester_id: number;
  school_year: string;
  term: number;
  status: string;
}

// FOR MANAGE DATA - DEPARTMENT
export interface Department {
  department_id: number;
  department_name: string;
  dean: string;
}

// FOR MANAGE DATA - ROOM
export interface Room {
  room_id: number;
  department_id: number;
  room_name: string;
  building_name: string;
  room_type: string;
  department_name: string;
}

// FOR MANAGE DATA - PROGRAM
export interface Program {
  program_id: number;
  department_id: number;
  program_name: string;
  abbreviation: string;
  department_name: string;
}

// FOR MANAGE DATA - CURRICULUM
export interface Curriculum {
  curriculum_id: number;
  program_id: number;
  program_name: string;
  year_effectivity: string;
  abbreviation: string;
}

// FOR MANAGE DATA - COURSE TYPE
export interface CourseType {
  course_type_id: number;
  course_type: string;
  duration: number;
  lec_unit: number;
  lab_unit: number;
  load_unit: number;
}

// FOR MANAGE DATA - COURSE
export interface Course {
  course_id: number;
  course_code: string;
  course_name: string;
  year_level: number;
  semester: number;
  course_type_id: number;
  course_type: string;
  curriculum_id: number;
  year_effectivity: number;
  program_id: number;
  abbreviation: string;
}

// FOR MANAGE DATA- STUDENT

export interface Student {
  user_id: number;
  student_id: number;
  school_id: string;
  surname: string;
  first_name: string;
  middle_name: string;
  program_id: number;
  program_name: string;
  year_level: number;
  block: string;
}

// FOR MANAGE DATA - INSTRUCTOR

export interface Instructor {
  instructor_id: number;
  academic_rank: string;
  surname: string;
  first_name: string;
  middle_name: string;
  research_status: string;
  employment_status: string;
  department_id: number;
  department_name: string;
}

// FOR MANAGE DATA - SCHEDULE

export interface Schedule {
  schedule_id: number;
  instructor_id: number;
  course_id: number;
  room_id: number;
  course_type_id: number;
  program_id: number;
  year_level: number;
  block: string;
  day: string;
  start_time: string;
  end_time: string;
  school_year_semester_id: number;
  first_name: string;
  middle_name: string;
  surname: string;
  course_code: string;
  course_name: string;
  room_name: string;
  course_type: string;
  program_name: string;
  abbreviation: string;
  school_year: string;
  term: number;
}

// For Timetable
export interface SpanTrack {
  [key: string]: number;
}

// FOR ADMIN DETAILS
export interface Admin {
  user_id: number;
  department_id: number | null;
  position: string | null;
  title: string | null;
  first_name: string;
  middle_name: string;
  surname: string;
  profile_pic: string;
  email: string;
}

// FOR SUMMARY OF SUBJECT LOAD
export interface SubjectLoadAPIResponse {
  success: boolean;
  data: InstructorDetails[];
}

interface InstructorDetails {
  instructor_id: number;
  surname: string;
  middle_name: string;
  first_name: string;
  academic_rank: string;
  employment_status: string;
  department_name: string;
  schedules: InstructorScheds[];
}

export interface InstructorScheds {
  schedule_id: number;
  course_id: number;
  course_name: string;
  course_code: string;
  day: string;
  start_time: string;
  end_time: string;
  room_id: number;
  room_name: string;
  course_type_id: number;
  lec_unit: number;
  lab_unit: number;
  load_unit: number;
  program_id: number;
  abbreviation: string;
  year_level: number;
  block: string;
  school_year_semester_id: number;
}

// For Assign Course
export interface AssignedCourse {
  courses_assigned_id: number;
  instructor_id: number;
  course_id: number;
  course_code: string;
  course_name: string;
  year_level: number;
  semester: number;
  // Add other properties if available
}
