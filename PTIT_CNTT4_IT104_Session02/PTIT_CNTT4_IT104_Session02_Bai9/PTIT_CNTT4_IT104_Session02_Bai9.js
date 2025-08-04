const student = {
  name: "Nguyễn Văn A",
  age: 20,
  ListMonHoc: [
    { subject: "Toán", score: 9 },
    { subject: "Lý", score: 8 },
    { subject: "Hóa", score: 6.5 },
    { subject: "Văn", score: 7 },
    { subject: "Sử", score: 4 }
  ]
};

const getStudentSummary = (student) => {
  const { name,age, ListMonHoc } = student;

  // Tính điểm trung bình
  const avg = +(
    ListMonHoc.reduce((sum, sub) => sum + sub.score, 0) / ListMonHoc.length
  ).toFixed(2);

  let rank = "";
  if (avg >= 8.5) rank = "Học Sinh Giỏi";
  else if (avg >= 7) rank = "Học Sinh Khá";
  else if (avg >= 5) rank = "Học Sinh Trung Bình";
  else rank = "Học Sinh Yếu";

  // Tìm môn học tốt nhất và kém nhất
  const sortSubject = [...ListMonHoc].sort((a, b) => a.score - b.score);
  const min = sortSubject[0];
  const max = sortSubject[sortSubject.length - 1];

    return `
        Tên: ${name}
        Tuổi: ${age}
        Điểm trung bình: ${avg}
        Xếp loại: ${rank}
        Môn học tốt nhất: ${max.subject} (${max.score})
        Môn học kém nhất: ${min.subject} (${min.score})
    `.trim();
};

console.log(getStudentSummary(student));
