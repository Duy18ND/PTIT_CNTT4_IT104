// 1: học viên
interface Student {
  readonly studentId: string;
  name: string;
  email: string;
  hasCompleted: boolean;
  finalScore?: number; // chỉ có nếu học viên đã hoàn thành
}

// 2: khóa học
interface Course {
  courseId: string;
  title: string;
  instructor: string;
  students: Student[]; // mảng chứa học sinh
  isActive: boolean;
}

// 3: quản lý khóa học
interface CourseManager {
  schoolName: string;
  year: number;
  courses: Course[];
}

// Tạo học viên
const sv1: Student = {
  studentId: "SV01",
  name: "linh",
  email: "phamlinh@gmail.com",
  hasCompleted: true,
  finalScore: 60 
};

// Tạo data khóa học
const course1: Course = {
  courseId: "C01",
  title: "Lập trình ReactJS",
  instructor: "Nguyễn Văn A",
  students: [sv1],
  isActive: true
};

// Tạo dữ liệu CourseManager
const courseManager: CourseManager = {
  schoolName: "PTIT",
  year: 2024,
  courses: [course1]
};

// Hàm: Trả về danh sách học viên đã hoàn thành khóa học
function getCompletedStudents(course: Course): Student[] {
  return course.students.filter(student => student.hasCompleted);
}

// Test thử
console.log(getCompletedStudents(course1));
