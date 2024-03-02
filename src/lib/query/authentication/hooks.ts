"use client";
import { postRegisterUser } from "./fetcher";
import { useMutation } from "@tanstack/react-query";

export const usePostRegisterUser = () => {
  const { isPending, error, mutate } = useMutation({
    mutationKey: ["postRegisterUser"],
    mutationFn: (body: any) => postRegisterUser(body),
  });
  return { isPending, error, mutate };
};
