import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";
import { redirect } from "next/navigation";
import ExamList from "./_components/exams-list";
import SearchInput from "@/components/common/search-input";
import AddExamDialog from "./_components/add-exam-dialog";

export default async function SubjectExamsPage({ params }: { params: { exams: string } }) {
  const subjectId = params.exams;

  // Catch Token
  const authCookie = cookies().get("next-auth.session-token")?.value;

  const decodedToken = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: authCookie,
  });

  if (!decodedToken) {
    redirect("/auth/login");
  }

  const apiToken = decodedToken.token;

  const response = await fetch(`${process.env.API}/exams?subject=${subjectId}`, {
    method: "GET",
    headers: {
      token: apiToken,
    },
    cache: "no-store",
  });

  const payload: ApiResponse<PaginatedResponse<{
    exams: Exam[]
  }>> = await response.json();


  return (
    <section className="p-6">
       <header className="py-7 flex items-center gap-6">
              <SearchInput />
              <AddExamDialog />
            </header>
        <ExamList exams={payload.exams} />
    </section>
  );
}
