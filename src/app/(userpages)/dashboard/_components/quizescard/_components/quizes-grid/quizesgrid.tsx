
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Subject } from "@/lib/types/subjects";
import Link from 'next/link';


interface QuizesGridProps {
  subjects: Subject[];
}

export default function QuizesGrid({ subjects }: QuizesGridProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleSubjects = showAll ? subjects : subjects.slice(0, 6);

  return (
    <section >
     <div className="flex items-center justify-between  py-2">
        <h3 className="text-custom-main font-medium text-xl">Quizes</h3>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-custom-main font-medium text-2xl "
        >
          {showAll ? 'Show less' : 'View all'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {visibleSubjects.map((subject) => (
          // navigate to exam on subject
        <Link href={`/dashboard/${subject._id}`} key={subject._id}>
          <div
            
            className="relative border-none rounded-lg shadow-sm w-full h-[330px] "
          >
            <Image
              src={subject.icon}
              alt={subject.name}
              width={180}
              height={180}
              className="object-contain w-full h-full"
            />
            {/* Info on Subject */}
            <div className="absolute bottom-3 p-3 rounded-lg bg-subjects text-white text-sm mx-[28px] mb-[20px] w-[calc(100%-56px)]">
              <span className=" font-bold">{subject.name}</span>
              <p className="pt-1">
                Voluptatem aut ut dignissimos blanditiis
              </p>
            </div>
          </div>
         </Link>
        ))}
      </div>
    </section>
  );
}
