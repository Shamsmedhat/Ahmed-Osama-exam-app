import { AnswerFields } from '@/lib/schemes/exam.schema';
import { JSON_HEADER } from '@/lib/constants/api.constant';

export async function checkQuestionsAction(fields: AnswerFields) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/check-question`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: ApiResponse<CheckResponse> = await response.json();
  return payload;
}
