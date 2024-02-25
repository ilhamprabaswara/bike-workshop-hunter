import { Payment, columns } from "@/components/cms-site/dashboard/columns";
import { DataTable } from "@/components/cms-site/dashboard/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728sd52f",
      amount: 100,
      status: "success",
      email: "a@example.com",
    },
    {
      id: "728sd5sf",
      amount: 100,
      status: "pending",
      email: "z@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
