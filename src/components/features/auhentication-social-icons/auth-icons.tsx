import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaFacebook, FaApple } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function AuthenticationIcons() {

  const ICONS = [
        {
            icon: <FcGoogle size={24} />,
            name: "Google",
            color: "text-red-500",
        },
        {
            icon: <FaTwitter size={24} />,
            name: "Twitter",
            color: "text-blue-500",
        },
        {
            icon: <FaFacebook size={24} />,
            name: "Facebook",
            color: "text-blue-600",
        },
        {
            icon: <FaApple size={24} />,
            name: "Apple",
            color: "text-black",
        },
  ]
  
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
                {ICONS.map((icon, index) => (
                    <button key={index} className={cn( icon.color ,"p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition")}>
                        {icon.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}