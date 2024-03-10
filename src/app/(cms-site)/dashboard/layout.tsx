import { DashboardNav } from "@/components/cms-site/layout/sidebar";
import { createClient } from "@/utils/supabase/server";
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
