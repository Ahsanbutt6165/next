import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlignVerticalJustifyStartIcon,
  File,
  GitGraphIcon,
  Grape,
  LayoutDashboardIcon,
  MessageCircleIcon,
  Settings,
  SidebarIcon,
  View,
} from "lucide-react";
import Link from "next/link";

export const SideBarDashboard = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <SidebarIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>Admin Dashboard</SheetTitle>
          <SheetDescription>
            Make changes to your BlogApp here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-4 px-4 py-6">
          <div className="grid gap-2">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <View className="inline"></View> Overview
            </Link>
          </div>
          <div className="grid gap-2">
            <Link
              href="/dashboard/articles/create"
              className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <File className="inline" /> Articles
            </Link>
          </div>
          <div className="grid gap-2">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <MessageCircleIcon className="inline" /> Comments
            </Link>
          </div>
          <div className="grid gap-2">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <GitGraphIcon className="inline" /> Analytics
            </Link>
          </div>
          <div className="grid gap-2">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <Settings className="inline" /> Settings
            </Link>
          </div>
        </div>

        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideBarDashboard;
