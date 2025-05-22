"use client";

import { Button } from "@/components/ui/button";
import { BookCheck } from "lucide-react";


export default function ExamItem({ exam }: { exam: Exam }) {
  return (
    <li key={exam._id} className="shadow-lg flex justify-between items-center rounded-xl p-6">
    {/* Exam */}
    <div className=" flex items-center gap-4">
      <BookCheck size={40} className="text-gray-700" />

      {/* Info */}
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h2 className="font-semibold text-lg">{exam.title}</h2>

        {/* Questions */}
        <p className="text-sm text-gray-700">{exam.numberOfQuestions} Questions</p>
      </div>
    </div>

    {/* Actions */}
    <div className="flex flex-col gap-2">
      {/* Duration */}
      <p>{exam.duration} Minutes</p>

      {/* Start */}
      <Button className="bg-custom-main text-white  w-36 rounded-full hover:bg-blue-600 ">Add Question</Button>
    
    </div>
  </li>
  );
}
