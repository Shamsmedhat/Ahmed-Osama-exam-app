import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Authentication Pages
const authPages = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/set-password",
    "/auth/verify-code"
];

// Hanle Public Pages
const publicPages = [...authPages];

const authMiddleware = withAuth(
    function onSuccess(req) {
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => token != null,
        },
        pages: {
            signIn: "/auth/login",
        },
    }
);

export default async function middleware(req: NextRequest) {
    const token = await getToken({ req });

    const isPublicPage = publicPages.includes(req.nextUrl.pathname);
    const isAuthPage = authPages.includes(req.nextUrl.pathname);

    if (isPublicPage) {
        if (token && isAuthPage) {
            const redirectUrl = new URL("/", req.nextUrl.origin);
            req.nextUrl.searchParams.forEach((value, key) => {
                redirectUrl.searchParams.set(key, value);
            });
            return NextResponse.redirect(redirectUrl);
        }
        return NextResponse.next();
    }

    return (authMiddleware as any)(req);
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"], 
};