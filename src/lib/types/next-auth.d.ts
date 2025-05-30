/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth,{User} from "next-auth"
import { JWT } from "next-auth/jwt"
declare module "next-auth" {

    interface User {
        token: string;
        user: ApplicationUser;
    }
    /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
    interface Session {
        // user:User["user"]
        user: ApplicationUser
    }
}



declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface JWT  extends User{}
}