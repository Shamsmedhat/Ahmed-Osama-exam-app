import AuthenticationIcons from "@/components/features/auhentication-social-icons/auth-icons";
import AuthenticationHeader from "@/components/layout/auth-header";
import AuthenticationLeftSection from "@/components/layout/auth-leftsection";


export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen max-h-screen items-center h-screen gap-32">
      {/* Left Section */}
      <AuthenticationLeftSection />

      <section className="auth-action w-[500px]">
        <AuthenticationHeader />
        <div className="w-96">
          {children}
          <AuthenticationIcons/>
        </div>
      </section>
    </div>
  );
}
