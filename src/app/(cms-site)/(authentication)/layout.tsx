import React from "react";
import { Toaster } from "sonner";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <Toaster />
    </>
  );
}
