'use client'

import SubmitFeedback from "@/components/common/submit-feedback";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useVerifyPasswordCodeSchema, VerifyCodeField } from "@/lib/schemes/auth.schema";
import useVerifyPasswordCode from "../_hooks/use-verifyCode";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function VerifyCodeForm() {
    // Hooks
    const verifyCadeSchema = useVerifyPasswordCodeSchema();
    const { isPending, error, verifyCode } = useVerifyPasswordCode()

    // Functions
    function onSubmit(values: VerifyCodeField) {
        verifyCode(values)
    }

    // From
    const form = useForm<VerifyCodeField>({
        resolver: zodResolver(verifyCadeSchema),
        defaultValues: {
            code: "",
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-5">
                {/* Code */}
                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">Code</FormLabel>
                            {/* Field */}
                            <FormControl>
                                <Input
                                    placeholder="Enter Code"
                                    {...field}
                                    type="text"
                                />
                            </FormControl>
                            {/* FeedBack */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <SubmitFeedback>{error?.message}</SubmitFeedback>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full bg-custom-main rounded-2xl py-6"
                    disabled={
                        isPending || (form.formState.isSubmitted && !form.formState.isValid)
                    }
                >
                    Verify
                </Button>
            </form>
        </Form>
    )
}