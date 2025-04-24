
import { Questions } from '@/lib/types/question';
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export default function useQuestions(examId?: string) {
  // Navigation
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams.toString());

  if (examId) {
    query.set("exam", examId);
  }
  
  // Query
  const { isLoading, error, data } = useQuery({
    queryKey: ["questions", examId],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/questions?${query.toString()}`);
      const payload: ApiResponse<PaginatedResponse<{ questions: Questions[] }>> = await response.json();

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
  });

  return { isLoading, error, payload: data };
}