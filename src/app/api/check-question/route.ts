import { JSON_HEADER } from '@/lib/constants/api.constant';
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const Jwt = await getToken({ req });
  const body = await req.json();

  const response = await fetch(`${process.env.API}/questions/check`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...JSON_HEADER,
      token: Jwt?.token || "",
    },
  });

  const payload = await response.json();
  return NextResponse.json(payload, { status: response.status });
}
