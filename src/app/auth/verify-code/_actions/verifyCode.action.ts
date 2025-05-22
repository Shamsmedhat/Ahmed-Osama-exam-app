"use server"

import { JSON_HEADER } from "@/lib/constants/api.constant"
import { VerifyCodeField } from "@/lib/schemes/auth.schema"

export const verifyCodeAction=async(
    verifyCodeField:VerifyCodeField
)=>{
    const respose=await fetch(`${process.env.API}/auth/verifyResetCode`,{
        method:"POST",
        body:JSON.stringify(verifyCodeField),
        headers:{
            ...JSON_HEADER
        },
    });

    const payload:ApiResponse<VerifyPasswordResponse> =await respose.json();
    return payload;
}