"use server"

import { JSON_HEADER } from "@/lib/constants/api.constant"
import { ForgotPasswordField } from "@/lib/schemes/auth.schema"

export const forgotPAsswordAction=async(
    forgotPasswordField:ForgotPasswordField
)=>{
    const response =await fetch(`${process.env.API}/auth/forgotPassword`,{
        method:"POST",
        body:JSON.stringify(forgotPasswordField),
        headers:{
            ...JSON_HEADER,
        },
    });

    const payload:ApiResponse<ForgotPasswordResponse>=await response.json();

    return payload
}