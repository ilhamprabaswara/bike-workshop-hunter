import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDeleteWorkshop } from "@/lib/query/dashboard/hooks";
import { toast } from "sonner";

const DeleteWorkshopAlert = ({
  id,
  name,
  location,
}: {
  id: number;
  name: string;
  location: string;
}) => {
  const { mutate: mutateDeleteWorkshop } = useDeleteWorkshop();
  const onDeleteWorkshop = () => {
    mutateDeleteWorkshop(id, {
      onSuccess: () => {
        toast.info(`Workshop ${name} is successfully deleted`);
      },
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>Delete</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete workshop</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this workshop?
          </AlertDialogDescription>
          <AlertDialogDescription>
            You are about to delete {name} located at {location}. This action
            cannot be undone. Deleting this workshop will remove it permanently
            from the listing and any associated reviews or bookings will be
            lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDeleteWorkshop}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteWorkshopAlert;
