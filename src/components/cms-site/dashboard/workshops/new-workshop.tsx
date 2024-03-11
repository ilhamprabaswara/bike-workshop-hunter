import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePostNewWorkshop } from "@/lib/query/dashboard/hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const NewWorkshopModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { mutate: mutatePostNewWorkshop } = usePostNewWorkshop();
  const onNewWorkshopSubmit = (data: any) => {
    const id = `id_${new Date().getTime()}_${Math.random().toString(36).substr(2, 9)}`;
    mutatePostNewWorkshop(
      { ...data, id },
      {
        onSuccess: () => {
          toast.success("New workshop is successfully added!");
          setOpen(false);
        },
      }
    );
  };
  const form = useForm({
    defaultValues: {
      name: "",
      location: "",
      contact: "",
      status: "1",
      services: "",
      rating: 0,
    },
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">New Workshop</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onNewWorkshopSubmit)}>
            <DialogHeader>
              <DialogTitle>New workshop</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">Workshop Name</FormLabel>
                    <FormControl>
                      <Input className="col-span-3" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="location"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">Location</FormLabel>
                    <FormControl>
                      <Input className="col-span-3" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="contact"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel htmlFor="contact" className="text-right">
                      Contact
                    </FormLabel>
                    <FormControl>
                      <Input className="col-span-3" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="status"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel htmlFor="status" className="text-right">
                      Status
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Status" {...field} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Active</SelectItem>
                        <SelectItem value="0">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                name="services"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel htmlFor="services" className="text-right">
                      Services
                    </FormLabel>
                    <FormControl>
                      <Input className="col-span-3" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="rating"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel htmlFor="rating" className="text-right">
                      Rating
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        max={5}
                        className="col-span-3"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewWorkshopModal;
