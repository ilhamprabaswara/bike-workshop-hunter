"use client";
import {
  deleteWorkshop,
  getMasterData,
  postNewWorkshop,
} from "@/lib/query/dashboard/fetcher";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetMasterData = () => {
  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ["masterData"],
    queryFn: () => getMasterData(),
    refetchOnWindowFocus: false,
  });
  return { isPending, error, data, isFetching, refetch };
};

export const usePostNewWorkshop = () => {
  const { isPending, error, mutate } = useMutation({
    mutationKey: ["postRegisterUser"],
    mutationFn: (body: any) => postNewWorkshop(body),
  });
  return { isPending, error, mutate };
};

export const useDeleteWorkshop = () => {
  const { isPending, error, mutate } = useMutation({
    mutationKey: ["postRegisterUser"],
    mutationFn: (id: number) => deleteWorkshop(id),
  });
  return { isPending, error, mutate };
};
