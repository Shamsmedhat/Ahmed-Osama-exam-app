import { ForgotPasswordField } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { forgotPAsswordAction } from "../_actions/forgotpassword.action";


export default function useForgotPassword() {
    //Navigation
    const searchParams = useSearchParams();
    const router = useRouter()

    //Mutation
    const { isPending, error, mutate } = useMutation({
        mutationFn: async (fields: ForgotPasswordField) => forgotPAsswordAction(fields),
        onSuccess: () => {
            router.push(`/auth/verify-code${searchParams.toString()}`);
        }
    });
    return { isPending, error, forgoPassword: mutate }
}