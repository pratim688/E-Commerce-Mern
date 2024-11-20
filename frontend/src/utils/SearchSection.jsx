import React from "react";
import { GrSearch } from "react-icons/gr";
const SearchSection = () => {
  return (
    <div className="flex items-center w-full justify-between max-w-sm border rounded-sm focus-within:shadow-md pl-2 bg-red-50">
      <input
        type="text"
        placeholder="Search product here..."
        className="w-full outline-none pl-2 bg-red-50 "
      />
      <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-sm text-white">
        <GrSearch />
      </div>
    </div>
  );
};

export default SearchSection;
