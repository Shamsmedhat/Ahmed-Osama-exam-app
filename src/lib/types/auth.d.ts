declare type ApplicationUser={
    _id: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    role: string,
    isVerified: boolean,
}

export declare type LoginResponse={
    token:string;
    user:ApplicationUser;
}

export declare type RegistrationResponse={
    token:string,
    user:ApplicationUser,
}

export declare type ForgotPasswordResponse={
    info:string,
}

export declare type VerifyPasswordResponse={
    status:string,
}

export declare type SetPasswordResponse={
    token:string,
}