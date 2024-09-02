import Raect from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BsInfoLg } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function signupPage() {
  const router = useRouter();

  const navigateToLoginPage = () => {
    router.push("/loginPage");
  };
  return (
    <div>
      <div className="flex items-center flex-col justify-center min-h-screen bg-slate-400">
        <div className="text-3xl font-black">SHOPEASY</div>
        <div className="bg-white rounded-lg shadow-md p-8 mt-3 max-w-md w-full">
          <h1 className="text-lg font-semibold">Create Account</h1>
          <form>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
              <Label htmlFor="name" className="text-sm">
                Name
              </Label>
              <Input type="name" id="name" placeholder="First and last name" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
              <Label htmlFor="name" className="text-sm">
                Mobile number or email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter mobile number or email"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
              <Label htmlFor="password" className="text-sm">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Atleast 6 characters"
              />
              <div className="flex">
                <div>
                  <BsInfoLg />
                </div>
                <div className="text-xs">
                  Passwords must be at least 6 characters
                </div>
              </div>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
              <Label htmlFor="name" className="text-sm">
                Re-enter password
              </Label>
              <Input type="text" id="reset" />
            </div>

            <Button variant="outline" className="w-full mt-5">
              Create Account
            </Button>

            <div className="flex gap-1.5 mt-3">
              <span className="text-sm font-medium">
                Already have an account
              </span>
              <span
                className="text-sm font-medium text-pink-800 cursor-pointer"
                onClick={navigateToLoginPage}
              >
                Sign In
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
