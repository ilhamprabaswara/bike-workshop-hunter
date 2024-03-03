"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostRegisterUser } from "@/lib/query/authentication/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RegisterPage = () => {
  const router = useRouter();
  const { mutate: mutatePostUserRegister } = usePostRegisterUser();
  const onRegisterSuccess = () => {
    toast.success("Hi! You're successfully registered!");
    router.push("/dashboard");
  };
  const onRegisterSubmit = (e: any) => {
    const { email, password } = e.target;
    mutatePostUserRegister(
      {
        email: email.value,
        password_hash: password.value,
      },
      {
        onSuccess: onRegisterSuccess,
      }
    );
    e.preventDefault();
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-[500px]">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={onRegisterSubmit}>
            <CardContent className="grid gap-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
