import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const BlogDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Your Articles</h1>
        <Link href="/dashboard/articles/create">
          <Button>Add New Article</Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-4">
          <h2 className="text-sm font-medium text-gray-500">Total Articles</h2>
          <p className="text-2xl font-bold text-black">24</p>
        </Card>
        <Card className="p-4">
          <h2 className="text-sm font-medium text-gray-500">Published</h2>
          <p className="text-2xl font-bold text-green-600">18</p>
        </Card>
        <Card className="p-4">
          <h2 className="text-sm font-medium text-gray-500">Comments</h2>
          <p className="text-2xl font-bold text-yellow-500">6</p>
        </Card>
      </div>

      {/* Recent Articles */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Articles</h2>
          <Link href="/" className="text-lg text-blue-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[200px]">Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Comments</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>10 Tips for Writing Clean Code</TableCell>
                <TableCell className="text-green-600 font-medium">
                  Published
                </TableCell>
                <TableCell>12</TableCell>
                <TableCell>July 15, 2025</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Understanding React Server Components</TableCell>
                <TableCell className="text-yellow-600 font-medium">
                  Draft
                </TableCell>
                <TableCell>0</TableCell>
                <TableCell>July 12, 2025</TableCell>
                <TableCell className="text-right space-x-2">
                  <Link href={`/dashboard/articles/${123}/edit`}>
                    {" "}
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </Link>

                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              {/* Add more rows dynamically later */}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BlogDashboard;
