"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import DeleteWorkshopAlert from "./delete-alert";

type Service =
  | "Repair"
  | "Maintenance"
  | "Custom Builds"
  | "Bike Fitting"
  | "Custom Paint Jobs"
  | "Gear Upgrades";

export type Workshop = {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviewsCount: number;
  services: Service[];
  contact: string;
  status: "1" | "0";
};
export const columns: ColumnDef<Workshop>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "services",
    header: "Services Offered",
  },
  {
    accessorKey: "contact",
    header: "Contact",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;
      return Number(status) ? "Active" : "Inactive";
    },
  },
  {
    // accessorKey: "",
    header: "Action",
    id: "actions",
    cell: ({ row }) => {
      const { id, location, name } = row.original;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/workshop/edit/${id}`}>Edit</Link>
          <DeleteWorkshopAlert id={id} location={location} name={name} />
        </div>
      );
    },
  },
];
