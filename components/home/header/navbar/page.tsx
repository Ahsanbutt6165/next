import Link from "next/link";
import React from "react";
import { Button } from "../../../ui/button";
import SearchInput from "../searchinput/search";
import { ModeToggle } from "../toggle/toggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="sticky inset-0 z-50 w-full border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="flex items-center space-x-2" href={"/"}>
              <span className="font-bold">
                <span className="text-red-600 font-bold text-2xl">
                  Ahsan's{" "}
                </span>
                <span>Articles</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href={"/articles"}
              className="text-sm font-medium text-foreground"
            >
              Articles
            </Link>
            <Link
              href={"/articles"}
              className="text-sm font-medium text-foreground"
            >
              dc
            </Link>
            <Link
              href={"/articles"}
              className="text-sm font-medium text-foreground"
            >
              dc
            </Link>
            <Link
              href={"/dashboard"}
              className="text-sm font-medium text-foreground"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SearchInput />
            <ModeToggle />

            <SignedIn>
              <UserButton></UserButton>
            </SignedIn>

            <SignedOut>
              <div className="hidden md:flex items-center gap-2">
                <SignInButton>
                  <Button>Login</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
