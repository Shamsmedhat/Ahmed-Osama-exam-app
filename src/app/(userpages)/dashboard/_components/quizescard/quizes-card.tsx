import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SubjectResponse } from "@/lib/types/subjects";
import QuizesGrid from "./_components/quizes-grid/quizesgrid";

export default async function QuizesCard() {
  const authCookie = cookies().get("next-auth.session-token")?.value;

  const decodedToken = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: authCookie,
  });

  if (!decodedToken) {
    redirect("/auth/login");
  }

  const apiToken = decodedToken.token;

  const response = await fetch(`${process.env.API}/subjects`, {
    method: "GET",
    headers: {
      token: apiToken,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch subjects: ${response.status} - ${errorText}`);
  }

  const data: SubjectResponse = await response.json();

  if (!data.subjects) {
    throw new Error("No subjects found in the response");
  }

  return (
    <Card className="w-full">
      <CardContent>
        <QuizesGrid subjects={data.subjects} />
      </CardContent>
    </Card>
  );
}
