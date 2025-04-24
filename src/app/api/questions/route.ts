import { Questions } from "@/lib/types/question";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    // Get SearchParam
    const searchParams = req.nextUrl.searchParams;
    // Get Token
    const Jwt = await getToken({ req })

    const response = await fetch(`${process.env.API}/questions?${searchParams.toString()}`, {
        headers: {
          token: Jwt?.token || ''
        },
      });
    const payload: ApiResponse<PaginatedResponse<{ questions: Questions[] }>> = await response.json();
    return NextResponse.json(payload,{status:response.status});
}