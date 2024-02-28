"use client";
import { getMasterData } from "@/lib/fetcher/dashboard/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useGetMasterData = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["masterData"],
    queryFn: () => getMasterData(),
  });
  return { isPending, error, data, isFetching };
};
