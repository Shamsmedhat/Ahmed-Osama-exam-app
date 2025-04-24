"use client";

import ExamItem from "./exam-items";

export default function ExamList({ exams }: { exams: Exam[] }) {
  return (
    <ul className="flex flex-col gap-4 w-[70vw]">
      {exams.map((exam) => (
        <ExamItem key={exam._id} exam={exam} />
      ))}
    </ul>
  );
}
