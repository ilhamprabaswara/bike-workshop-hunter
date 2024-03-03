import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StatusFilter = ({ table }: any) => (
  <div className="flex items-center gap-3">
    <Label>Filter Status</Label>
    <Select
      value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
      onValueChange={(e) => table.getColumn("status")?.setFilterValue(e)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Active</SelectItem>
        <SelectItem value="0">Inactive</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export default StatusFilter;
