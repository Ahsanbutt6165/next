"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import "react-quill/dist/quill.snow.css";
// Dynamically import the Quill editor
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const CreateArticle = () => {
  const [content, setContent] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create New Article
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                name="title"
                placeholder="Enter article title"
                className="w-full"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select category</option>
                <option value="web">Web</option>
                <option value="political">Political</option>
              </select>
            </div>

            {/* Featured Image */}
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image</Label>
              <Input
                id="featuredImage"
                type="file"
                name="featuredImage"
                accept="image/*"
                className="w-full"
              />
            </div>

            {/* Content */}
            <div className="space-y-2 ">
              <Label htmlFor="content">Content</Label>
              <div className="bg-white rounded-md overflow-hidden border">
                <ReactQuill
                  id="content"
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  className="h-48"
                />
              </div>
            </div>

            {/* Submit */}
            <div>
              <Button type="submit">Publish Article</Button>
            </div>
            <div>
              <Button>Cancel</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateArticle;
