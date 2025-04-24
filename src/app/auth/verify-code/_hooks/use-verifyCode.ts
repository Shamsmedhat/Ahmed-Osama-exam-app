"use client";

import { VerifyCodeField } from "@/lib/schemes/auth.schemes";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";
import { verifyCodeAction } from "../_actions/verifyCode.action";

export default function useVerifyPasswordCode() {
  // Navigation
  const searchParams = useSearchParams();
  const router = useRouter();

  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (field: VerifyCodeField) => verifyCodeAction(field),
    onSuccess: () => {
      router.push(`/auth/set-password?${searchParams.toString()}`);
    },
  });

  return { isPending, error, verifyCode: mutate };
}

