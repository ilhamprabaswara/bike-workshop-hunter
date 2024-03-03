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
import { signUp } from "../actions";

const RegisterPage = () => {
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
          <form>
            <CardContent className="grid gap-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="first_name">First Name</Label>
                <Input
                  name="first_name"
                  id="first_name"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input name="password" id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button formAction={signUp} type="submit" className="w-full">
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
