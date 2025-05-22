import { getAuthHeader } from "../utils/auth-header";

export async function getExams(subjectId: string) {
    const response = await fetch(`${process.env.API}/exams?subject=${subjectId}`, {
        headers: {
            ...await getAuthHeader()
        }
    });

    const payload: ApiResponse<PaginatedResponse<{ exams: Exam[] }>> = await response.json();

    return payload;
}
