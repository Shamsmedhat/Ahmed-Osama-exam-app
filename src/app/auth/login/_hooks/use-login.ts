import { useSearchParams } from "next/navigation";
import { LoginFields } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { AuthenticationError } from "@/lib/utils/app-errors";

export default function useLogin() {
    // Variable
    const searchParams = useSearchParams();

    const { isPending, error, mutate } = useMutation({
        mutationFn: async ({ email, password }: LoginFields) => {
            const response = await signIn("credentials", {
                email,
                password,
                redirect: false,
                callbackUrl: decodeURIComponent(searchParams.get("callbackUrl") || "/dashboard"),
            });

            if (response?.error) throw new AuthenticationError(response.error);

            return response;
        },
        onSuccess: (data) => {
            window.location.href = data?.url || "/dashboard";
        },
    });

    return { isPending, error, login: mutate };
}