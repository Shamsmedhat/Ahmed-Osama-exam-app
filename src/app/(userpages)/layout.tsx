import SearchInput from "@/components/common/search-input";
import AppSidebar from "@/components/layout/sidebar";

export default function UserPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-48">
        <AppSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex flex-col flex-grow ml-16 ">
        {/*SearchInput */}
        <header className="mt-3 ml-6 flex items-center gap-6">
          <SearchInput />
        </header>

        {/* Pages */}
        <div className="px-6 max-w-7xl mx-auto ">
          {children}
        </div>
      </main>
    </div>
  );
}