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
import { useSetPasswordSchema, SetPasswordField } from "@/lib/schemes/auth.schemes";
import useSetPassword from "../_hooks/use-setPassword";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SetPasswordForm() {
    // Hooks
    const setPassSchema = useSetPasswordSchema()
    const { isPending, error, setPassword } = useSetPassword()

    // Form
    const form = useForm<SetPasswordField>({
        resolver: zodResolver(setPassSchema),
        defaultValues: {
            email: "",
            newPassword: "",
        },
    });

    // Functions

    function onSubmit(values: SetPasswordField) {
        setPassword(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-5">
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
                                    placeholder="Enter Your Email"
                                    {...field}
                                    type="text"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* New Password */}
                <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">New Password</FormLabel>
                            {/* Field */}
                            <FormControl>
                                <Input
                                    placeholder="Create Password"
                                    {...field}
                                    type="text"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <SubmitFeedback>{error?.message}</SubmitFeedback>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full bg-main rounded-2xl py-6"
                    disabled={
                        isPending || (form.formState.isSubmitted && !form.formState.isValid)
                    }
                >
                    Create Password
                </Button>
            </form>
        </Form>
    )
}
