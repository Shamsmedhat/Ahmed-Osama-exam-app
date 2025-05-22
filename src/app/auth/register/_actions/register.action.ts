"use server";

import { RegistrationFields } from "@/lib/schemes/auth.schema";
import { JSON_HEADER } from "@/lib/constants/api.constant";

export const registerAction = async (registrationField: RegistrationFields) => {
    const response = await fetch(`${process.env.API}/auth/signup`, {
        method: "POST",
        body: JSON.stringify(registrationField),
        headers: {
            ...JSON_HEADER,
        },
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Registration failed: ${response.status} - ${errorText}`);
    }

    const payload: ApiResponse<RegistrationResponse> = await response.json();
    return payload;
};