"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

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
  status: "Active" | "Inactive";
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
          <Dialog>
            <DialogTrigger>Delete</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete workshop</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this workshop?
                </DialogDescription>
                <DialogDescription>
                  You are about to delete {name} located at {location}. This
                  action cannot be undone. Deleting this workshop will remove it
                  permanently from the listing and any associated reviews or
                  bookings will be lost.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose>
                  <Button>Cancel</Button>
                </DialogClose>
                <Button>Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
