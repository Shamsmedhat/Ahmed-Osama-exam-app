"use server"
import { JSON_HEADER } from "@/lib/constants/api.constant";
import { SetPasswordField } from "@/lib/schemes/auth.schemes";
import { SetPasswordResponse } from "@/lib/types/auth";


export const SetPasswordAction=async(
    setPasswordField:SetPasswordField
)=>{
    const response=await fetch(`${process.env.API}/auth/resetPassword`,{
        method:"PUT",
        body:JSON.stringify(setPasswordField),
        headers:{
            ...JSON_HEADER
        },
    });

    const payload:ApiResponse<SetPasswordResponse> =await response.json()
}