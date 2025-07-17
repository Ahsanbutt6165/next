import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopArticles = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-6">
      <Card className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-lg">
        <Link href="/articles" className="block">
          {/* Article Image */}
          <div className="relative h-48 w-full overflow-hidden p-2">
            <img
              src="https://i.pravatar.cc/500?img=3"
              alt="Article Cover"
              className="object-cover w-full h-full rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Card Content */}
          <div className="p-4 space-y-3">
            {/* Author Info */}
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div>
                <span className="block font-medium text-gray-800">
                  Ahsan Ali
                </span>
                <span className="text-sm text-gray-500">
                  July 17, 2025 • Web Dev
                </span>
              </div>
            </div>

            {/* Article Title */}
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition line-clamp-2">
              How to Become a Web Developer in 2025 – Step-by-Step Guide for
              Beginners
            </h3>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default TopArticles;
