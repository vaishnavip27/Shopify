import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  const navigateToSignup = () => {
    router.push("/signupPage");
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-slate-400">
      <div className="text-3xl font-black">SHOPEASY</div>
      <div className="bg-white rounded-lg shadow-md p-8 mt-3 max-w-md w-full">
        <div className="text-xl font-semibold">Log In</div>
        <form>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <div className="items-top flex space-x-2 mt-3">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          </div>

          <Button variant="outline" className="w-full mt-5">
            Log In
          </Button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">New to Shopeasy</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <Button
          variant="outline"
          className="w-full mt-5"
          onClick={navigateToSignup}
        >
          Create your Shopeasy account
        </Button>
      </div>
    </div>
  );
}
