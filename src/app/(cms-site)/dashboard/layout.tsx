import { DashboardNav } from "@/components/cms-site/layout/sidebar";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const externalLinkItem = [
    {
      title: "Dashboard",
      href: "/dashboard",
      external: true,
      icon: "ExternalLinkIcon", // assuming "ExternalLinkIcon" is a key in Icons
    },
    {
      title: "Workshop Listings",
      href: "/dashboard/workshops",
      external: true,
      icon: "ExternalLinkIcon", // assuming "ExternalLinkIcon" is a key in Icons
    },
    {
      title: "Reviews and Ratings",
      href: "/dashboard/reviews",
      external: true,
      icon: "ExternalLinkIcon", // assuming "ExternalLinkIcon" is a key in Icons
    },
  ];
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <>
      <header className="bg-background sticky top-0 z-40 border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
              <span className="hidden font-bold sm:inline-block">BWHunter</span>
            </Link>
          </div>
          <div>{data.user.user_metadata.first_name}</div>
        </div>
      </header>
      <div className="flex min-h-screen flex-col space-y-6">
        <div className="container mt-10 grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNav items={externalLinkItem} />
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
