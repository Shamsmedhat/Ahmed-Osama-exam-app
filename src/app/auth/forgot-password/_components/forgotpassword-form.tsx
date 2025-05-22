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
import { useForgotPasswordSchema, ForgotPasswordField } from "@/lib/schemes/auth.schema";
import useForgotPassword from "../_hook/use-forgotpassword";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";


export default function ForgotPasswordForm() {
    // Hooks
    const forgotPasswordSchema = useForgotPasswordSchema();
    const { isPending, error, forgoPassword } = useForgotPassword()

    //Form
    const form = useForm<ForgotPasswordField>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: ""
        },
    });

    //Functions
    function onSubmit(values: ForgotPasswordField) {
        forgoPassword(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" max-w-md space-y-5 " >
                {/* Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">Email</FormLabel>
                            {/* Field */}
                            <FormControl>
                                <Input
                                    placeholder="Enter Email"
                                    {...field}
                                    type="email"
                                />
                            </FormControl>
                            {/* FeedBack */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Link href={'/auth/forgot-password'} className="text-custom-main float-end py-3">Recover Password ?</Link>

                <SubmitFeedback>{error?.message}</SubmitFeedback>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full bg-custom-main rounded-2xl py-6"
                    disabled={
                        isPending || (form.formState.isSubmitted && !form.formState.isValid)
                    }
                >
                    Sign in
                </Button>
            </form>
        </Form>
    )
}