import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthenticationHeader() {
  return (
    <nav className="flex  fixed justify-end top-11  right-16 space-x-8 ">
      {/* Sign In Button */}
      <Button variant="ghost">
        <Link href={"/auth/login"} className="font-bold text-xl text-custom-main">Sign in</Link>
      </Button>

      {/* Register Button */}
      <Button variant="outline" className="text-custom-main text-xl px-7 py-5 rounded-2xl">
        <Link href={"/auth/register"}>Register</Link>
      </Button>
    </nav>
  );
}