import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";
import { redirect } from "next/navigation";
import ExamList from "./_components/exams-list";

export default async function SubjectExamsPage({ params }: { params: { exams: string } }) {
  const subjectId = params.exams;

  // Catch Token
  const authCookie = cookies().get("next-auth.session-token")?.value;

  const decodedToken = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: authCookie,
  });
// redirect to login page if there isn't token
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
  // console.log(payload.exams);


  return (
    <section className="p-6">
      <h1 className="font-bold text-4xl mb-6">Exams</h1>
     
        <ExamList exams={payload.exams} />
      
    </section>
  );
}
