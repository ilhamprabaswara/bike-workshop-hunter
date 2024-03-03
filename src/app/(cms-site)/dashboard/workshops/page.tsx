"use client";
import { columns } from "@/components/cms-site/dashboard/workshops/columns";
import { DataTable } from "@/components/cms-site/dashboard/workshops/data-table";
import { useGetMasterData } from "@/lib/query/dashboard/hooks";

export default function DashboardPage() {
  const { data, isFetching, refetch } = useGetMasterData();
  if (isFetching) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mx-auto">
      <DataTable refetch={refetch} columns={columns} data={data} />
    </div>
  );
}
