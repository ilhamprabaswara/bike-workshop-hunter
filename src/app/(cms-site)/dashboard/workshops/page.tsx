"use client";
import { columns } from "@/components/cms-site/dashboard/workshops/columns";
import { DataTable } from "@/components/cms-site/dashboard/workshops/data-table";
import { useGetWorkshopsList } from "@/lib/query/dashboard/hooks";

export default function DashboardPage() {
  const { data, isFetching } = useGetWorkshopsList();
  if (isFetching) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
