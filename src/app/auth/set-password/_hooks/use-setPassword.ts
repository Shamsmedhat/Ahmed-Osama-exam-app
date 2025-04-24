"use client"

import { SetPasswordField } from "@/lib/schemes/auth.schemes"
import { useMutation } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { SetPasswordAction } from "../_action/setPassword.action"

export default function useSetPassword() {
    // Navigation
    const searchParams = useSearchParams()
    const router = useRouter()

    const { isPending, error, mutate } = useMutation({
        mutationFn: async (fields: SetPasswordField) => SetPasswordAction(fields),
        onSuccess: () => {
            router.push(`/auth/login?${searchParams.toString()}`)
        },
    });

    return { isPending, error, setPassword: mutate }
}