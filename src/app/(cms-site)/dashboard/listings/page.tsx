"use client";
import { columns } from "@/components/cms-site/dashboard/columns";
import { DataTable } from "@/components/cms-site/dashboard/data-table";
import { useGetMasterData } from "@/lib/hooks/dashboard/hooks";

export default function DashboardPage() {
  // const data = await getData();
  const { data, isFetching } = useGetMasterData();
  if (isFetching) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
