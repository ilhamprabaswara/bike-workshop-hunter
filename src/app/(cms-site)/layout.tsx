import { Toaster } from "sonner";

export default async function ContentManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <Toaster richColors position="top-center" />
    </>
  );
}
