import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <form>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search..."
          className="pl-10" // adds space for icon
        />
      </div>
    </form>
  );
};

export default SearchInput;
