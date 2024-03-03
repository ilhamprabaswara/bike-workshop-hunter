"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useGetWorkshopDetail } from "@/lib/query/dashboard/hooks";
import { useForm } from "react-hook-form";

const DashboardWorkshopEditPage = ({
  params,
}: {
  params: { workshopId: string };
}) => {
  const { data: workshopDetailData, isFetching } = useGetWorkshopDetail(
    params.workshopId
  );
  const form = useForm();
  if (workshopDetailData) {
    form.setValue("name", workshopDetailData[0].name);
    form.setValue("location", workshopDetailData[0].location);
    form.setValue("contact", workshopDetailData[0].contact);
  }
  function onSubmit(values: any) {
    console.log(values);
  }

  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="px-5">
      <h1>Edit Workshop</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Workshop Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your workshop name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Jakarta" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="contact"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input placeholder="Contact" {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Workshop Status</FormLabel>
                <FormControl>
                  <Switch
                    className="flex"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
export default DashboardWorkshopEditPage;
