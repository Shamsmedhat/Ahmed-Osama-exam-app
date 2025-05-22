'use client'

import { RegistrationFields } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { registerAction } from "../_actions/register.action";

export default function useRegister() {
    // Navigation
    const searchParams = useSearchParams();

    // Mutation
    const { isPending, error, mutate } = useMutation({
        mutationFn: async (fields: RegistrationFields) => registerAction(fields),
        onSuccess: () => {
            window.location.href = `/auth/login?${searchParams.toString()}`;
        }
    });

    return { isPending, error, register: mutate }
}
