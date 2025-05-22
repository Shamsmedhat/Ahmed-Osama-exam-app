'use client'

import SubmitFeedback from "@/components/common/submit-feedback"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registrationSchema, RegistrationFields } from "@/lib/schemes/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import useRegister from "../_hook/use-register"
import Link from "next/link"


export default function RegisterForm() {
    //Hook
    const { isPending, error, register } = useRegister();

    //Form
    const form = useForm<RegistrationFields>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            rePassword: "",
            username: ""
        },
    });

    //Functions
    function onSubmit(values: RegistrationFields) {
        register(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 text-center">

                {/* USerName */}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">userName</FormLabel>
                            {/* Field */}
                            <FormControl>
                                <Input
                                    placeholder="userName"
                                    {...field}
                                    type="text"
                                />
                            </FormControl>
                            {/* FeedBack */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex gap-2">
                    {/* First Name */}
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                {/* Label */}
                                <FormLabel className="sr-only">UserName</FormLabel>
                                {/* Field */}
                                <FormControl>
                                    <Input
                                        placeholder="First Name"
                                        {...field}
                                        type="text"
                                    />
                                </FormControl>
                                {/* FeedBack */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Last Name */}
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                {/* Label */}
                                <FormLabel className="sr-only">Last Name</FormLabel>
                                {/* Field */}
                                <FormControl>
                                    <Input
                                        placeholder="Last Name"
                                        {...field}
                                        type="text"
                                    />
                                </FormControl>
                                {/* FeedBack */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>


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
                                    placeholder="Email"
                                    {...field}
                                    type="email"
                                />
                            </FormControl>
                            {/* FeedBack */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Phone */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">Phone</FormLabel>
                            {/* Field */}
                            <FormControl>
                                <Input
                                    placeholder="Phone Number"
                                    {...field}
                                    type="text"
                                />
                            </FormControl>
                            {/* FeedBack */}
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
                            {/* Label */}
                            <FormLabel className="sr-only">Password</FormLabel>
                            {/* Field */}
                            <FormControl>
                                <Input
                                    placeholder="Password"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            {/* FeedBack */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* rePassword */}
                <FormField
                    control={form.control}
                    name="rePassword"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">Confirm Password</FormLabel>
                            {/* Field */}
                            <FormControl>
                                <Input
                                    placeholder="Confirm Password"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            {/* FeedBack */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <p>Already have an account? <span className="text-custom-main"><Link href={"/auth/login"}>Login</Link></span></p>

                <SubmitFeedback>{error?.message}</SubmitFeedback>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full bg-custom-main rounded-2xl py-6"
                    disabled={
                        isPending || (form.formState.isSubmitted && !form.formState.isValid)
                    }
                >
                    Create Account
                </Button>
            </form>
        </Form>
    )

}