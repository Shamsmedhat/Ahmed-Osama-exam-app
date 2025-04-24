import { date, z } from "zod";

export const loginSchema = z.object({
    email: z.string().email().min(1, "please enter your email"),
    password: z.string().min(1, "please enter your password"),
});

export type LoginFields = z.infer<typeof loginSchema>;


export const registrationSchema = z.object({

    firstName: z
        .string({ required_error: "firstname-required" })
        .min(1, "firstname-required"),
    lastName: z
        .string({ required_error: "lastname-required" })
        .min(1, "lastname-required"),
    username: z.string({ required_error: "username-required" })
        .min(1, "username-required"),
    email: z
        .string({ required_error: "email-required" })
        .email({ message: "email is invalid" }),
    phone: z
        .string({ required_error: "lastname-required" })
        .min(1, "phonenumber-required"),
    password: z.string({ required_error: "password-required" })
        .min(8, "password should be at least 8 characters"),
    rePassword: z.string(),

}).refine((data) => data.password === data.rePassword, {
    message: "password and rePassword don't match",
    path: ["rePassword"]
});

export type RegistrationFields = z.infer<typeof registrationSchema>;

// Forgot Password
export const useForgotPasswordSchema = () => {
    return z.object({
        email: z.string({ required_error: "email-required" }).email({ message: "email is invalid" }),
    });
};

export type ForgotPasswordField = z.infer<ReturnType<typeof useForgotPasswordSchema>>;

//Verify Password Code
export const useVerifyPasswordCodeSchema = () => {
    return z.object({
        code: z.string({ required_error: "Code-required" })
    });
};
export type VerifyCodeField = z.infer<ReturnType<typeof useVerifyPasswordCodeSchema>>;

//Set Password
export const useSetPasswordSchema = () => {
    return z.object({
        email: z.string({ required_error: "email-required" })
            .email({ message: "email is invalid" }),
        newPassword: z.string({ required_error: "password-required" })
            .min(8, "password should be at least 8 characters"),
    });
};

export type SetPasswordField = z.infer<ReturnType<typeof useSetPasswordSchema>>;