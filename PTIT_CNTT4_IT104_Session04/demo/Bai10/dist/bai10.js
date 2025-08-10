// Tạo học viên
const sv1 = {
    studentId: "SV01",
    name: "linh",
    email: "phamlinh@gmail.com",
    hasCompleted: true,
    finalScore: 60
};
// Tạo data khóa học
const course1 = {
    courseId: "C01",
    title: "Lập trình ReactJS",
    instructor: "Nguyễn Văn A",
    students: [sv1],
    isActive: true
};
// Tạo dữ liệu CourseManager
const courseManager = {
    schoolName: "PTIT",
    year: 2024,
    courses: [course1]
};
// Hàm: Trả về danh sách học viên đã hoàn thành khóa học
function getCompletedStudents(course) {
    return course.students.filter(student => student.hasCompleted);
}
// Test thử
console.log(getCompletedStudents(course1));
