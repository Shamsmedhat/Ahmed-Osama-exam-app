import AdminSidebar from "@/components/layout/admin-sidebar";

export default function UserPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex  justify-between w-full min-h-screen">
            {/* Sidebar */}
            <aside className="w-48">
                <AdminSidebar />
            </aside>

            {/* Contet */}
            <main className="flex flex-col flex-grow ml-12">
                <div className="px-6 w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}