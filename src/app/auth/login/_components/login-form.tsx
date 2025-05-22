'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFields, loginSchema } from "@/lib/schemes/auth.schema"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import useLogin from "../_hooks/use-login"


export default function LoginForm() {
    // Hooks
    const { isPending, error: loginError, login } = useLogin();

    // Form
    const form = useForm<LoginFields>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(loginSchema)
    });

    // Functions
    const onSubmit: SubmitHandler<LoginFields> = (values) => {
        login(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-5 ">
                {/* Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="sr-only">Email</FormLabel>
                            <FormControl>
                                <Input {...field} type="email" placeholder="Email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="sr-only">Password</FormLabel>
                            <FormControl>
                                <Input {...field} type="password" placeholder="Password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* handle error */}
                {loginError && (
                  <p className="text-red-500 text-sm">{loginError.message}</p>
                )}

                {/* Recover */}
                <Link className="text-base text-end block text-custom-main" href={'/auth/forgot-password'}>
                    Recover Password ?
                </Link>

                <Button
                    disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
                    type="submit"
                    className="w-full bg-custom-main rounded-2xl py-6"
                >
                    Sign in
                </Button>
            </form>
        </Form>
    )
}