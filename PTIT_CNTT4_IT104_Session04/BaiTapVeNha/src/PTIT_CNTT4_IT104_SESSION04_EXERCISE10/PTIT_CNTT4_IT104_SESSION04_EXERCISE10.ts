type StudentList = {
  readonly studentId: string;
  name: string;
  email: string;
  hasCompleted: boolean;
  finalScore?: number;
};

type Course = {
  courseId: string;
  title: string;
  instructor: string;
  students: StudentList[];
  isActive: boolean;
};

type CourseManager = {
  schoolName: string;
  year: number;
  courses: Course[];
};

function getCompletedStudents(course: Course): StudentList[] {
  return course.students.filter(student => student.hasCompleted);
}

function calculateAverageScore(course: Course): number | null {
  const scoredStudents = course.students.filter(
    student => typeof student.finalScore === "number"
  );

  if (scoredStudents.length === 0) return null;

  const total = scoredStudents.reduce(
    (sum, student) => sum + (student.finalScore ?? 0),
    0
  );

  return parseFloat((total / scoredStudents.length).toFixed(2));
}

function printCourseReport(manager: CourseManager): void {
  console.log(`Báo cáo khóa học - ${manager.schoolName} (${manager.year})`);
  console.log("============================================");

  manager.courses.forEach((course, index) => {
    const totalStudents = course.students.length;
    const completedCount = getCompletedStudents(course).length;
    const avgScore = calculateAverageScore(course);

    console.log(`${index + 1}. Khóa: ${course.title} (GV: ${course.instructor})`);
    console.log(`   - Tổng học viên: ${totalStudents}`);
    console.log(`   - Hoàn thành: ${completedCount} học viên`);
    console.log(`   - Điểm trung bình: ${avgScore ?? "Chưa cập nhập"}`);
    console.log(`   - Trạng thái: ${course.isActive ? "Đang mở" : "Đã đóng"}`);
    console.log("--------------------------------------------");
  });
}

// Dữ liệu mẫu
const courseManager: CourseManager = {
  schoolName: "Trung tâm A",
  year: 2025,
  courses: [
    {
      courseId: "TS01",
      title: "TypeScript Cơ Bản",
      instructor: "Nguyễn Văn A",
      isActive: true,
      students: [
        { studentId: "S1", name: "Học viên 1", email: "a@example.com", hasCompleted: true, finalScore: 9 },
        { studentId: "S2", name: "Học viên 2", email: "b@example.com", hasCompleted: true, finalScore: 8 },
        { studentId: "S3", name: "Học viên 3", email: "c@example.com", hasCompleted: false }
      ]
    },
    {
      courseId: "HTML01",
      title: "HTML & CSS",
      instructor: "Trần Thị B",
      isActive: false,
      students: [
        { studentId: "S4", name: "Học viên 4", email: "d@example.com", hasCompleted: false },
        { studentId: "S5", name: "Học viên 5", email: "e@example.com", hasCompleted: false }
      ]
    }
  ]
};

printCourseReport(courseManager);
