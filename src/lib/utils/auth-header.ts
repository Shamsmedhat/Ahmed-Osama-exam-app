import 'server-only'

import { cookies } from "next/headers"
import { AUTH_COOKIE } from "../constants/auth.constant"
import { decode, JWT } from "next-auth/jwt";
// Get token
export async function getAuthHeader() {
    const tokenCookie = cookies().get(AUTH_COOKIE)?.value;
    let Jwt: JWT | null = null;
    try {
            Jwt = await decode({
            token: tokenCookie,
            secret: process.env.NEXTAUTH_SECRET!,
        });
        
    } catch (error) {
        void error;
        
    }
    return{
        token:Jwt?.token||""
    }
}