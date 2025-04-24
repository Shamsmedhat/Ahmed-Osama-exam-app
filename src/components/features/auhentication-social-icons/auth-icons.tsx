import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaFacebook, FaApple } from "react-icons/fa";
import { signIn } from "next-auth/react";
// import { Button } from "@/components/ui/button";


// onClick={()=>{
//     signIn("google",{
//         callbackUrl:"http://localhost:3000/dashboard"
//     })
// }}

export default function AuthenticationIcons() {
    return (
        <div className="flex flex-col items-center justify-center  mt-9">
            {/* "Or Continue with" */}
            <div className="relative w-full max-w-md flex items-center justify-center">
                <hr className="w-full border-gray-300" />
                <span className="absolute bg-white px-4 text-gray-500 text-sm">
                    Or Continue with
                </span>
            </div>

            {/* Icons */}
            <div className="flex space-x-8 mt-8">
                {/* Google */}
                <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                    <FcGoogle size={24} />
                </button>

                {/* Twitter */}
                <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                    <FaTwitter size={24} className="text-blue-500" />
                </button>

                {/* Facebook */}
                <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                    <FaFacebook size={24} className="text-blue-600" />
                </button>

                {/* Apple */}
                <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                    <FaApple size={24} className="text-black" />
                </button>
            </div>
        </div>
    );
}