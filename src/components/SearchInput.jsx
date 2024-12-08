import { SearchIcon } from "@heroicons/react/outline";

import { Input } from "./ui/input";

function SearchInput() {
  return (
    <>
      {/* <SearchIcon className="w-4 h-4 text-gray-400 absolute left-40 top-1" /> */}
      <Input
        placeholder="Search task"
        className="focus:outline-none w-64 bg-secondary" // Customizing appearance
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // Handle search logic here
            console.log("Search triggered");
          }
        }}

        // Handling keyboard events
      />
    </>
  );
}

export default SearchInput;
