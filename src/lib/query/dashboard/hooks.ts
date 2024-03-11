"use client";
import {
  deleteWorkshop,
  editWorkshopDetail,
  getWorkshopDetail,
  getWorkshopsList,
  postNewWorkshop,
} from "@/lib/query/dashboard/fetcher";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetWorkshopsList = () => {
  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ["workshopsListData"],
    queryFn: () => getWorkshopsList(),
    refetchOnWindowFocus: false,
  });
  return { isPending, error, data, isFetching, refetch };
};

export const usePostNewWorkshop = () => {
  const queryClient = useQueryClient();
  const { isPending, error, mutate } = useMutation({
    mutationKey: ["postRegisterUser"],
    mutationFn: (body: any) => postNewWorkshop(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workshopsListData"] });
    },
  });
  return { isPending, error, mutate };
};

export const useDeleteWorkshop = () => {
  const queryClient = useQueryClient();
  const { isPending, error, mutate } = useMutation({
    mutationKey: ["postRegisterUser"],
    mutationFn: (id: number) => deleteWorkshop(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workshopsListData"] });
    },
  });
  return { isPending, error, mutate };
};

export const useGetWorkshopDetail = (id: string) => {
  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ["workshopDetail", id],
    queryFn: () => getWorkshopDetail(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
  return { isPending, error, data, isFetching, refetch };
};

export const useEditWorkshop = () => {
  const { isPending, error, mutate } = useMutation({
    mutationKey: ["editWorkshopDetail"],
    mutationFn: (body) => editWorkshopDetail(body),
  });
  return { isPending, error, mutate };
};
