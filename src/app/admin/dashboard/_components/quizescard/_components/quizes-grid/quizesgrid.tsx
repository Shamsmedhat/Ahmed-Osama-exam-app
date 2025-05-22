'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Subject } from "@/lib/types/subjects";
import Link from 'next/link';

interface QuizesGridProps {
  subjects: Subject[];
}

export default function QuizesGrid({ subjects }: QuizesGridProps) {
  // State
  const [showAll, setShowAll] = useState(false);
  const visibleSubjects = showAll ? subjects : subjects.slice(0, 6);

  return (
    <section>
      <div className="flex items-center justify-between py-4">
        <h3 className="text-custom-main font-medium text-xl">Quizes</h3>
        {/* View All Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-custom-main font-medium text-xl"
        >
          {showAll ? 'Show less' : 'View all'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {visibleSubjects.map((subject) => (
          <Link href={`/admin/dashboard/${subject._id}`} key={subject._id}>
            <div
              key={subject._id}
              className="relative border-none rounded-lg shadow-sm w-full h-[300px] overflow-hidden"
            >
              <Image
                src={subject.icon}
                alt={subject.name}
                fill
                className="object-cover w-full h-full"
                quality={75}
              />
              <div className="absolute bottom-3 p-3 rounded-lg bg-subjects text-white text-sm mx-5 mb-[20px] w-[calc(100%-40px)]">
                <span className="font-bold">{subject.name}</span>
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