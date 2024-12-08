import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-white mr-32">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="added">Order added</SelectItem>
          <SelectItem value="earlier">Earlier first</SelectItem>
          <SelectItem value="later">Later first</SelectItem>
          <SelectItem value="completed">Completed first</SelectItem>
          <SelectItem value="uncompleted">Uncompleted first</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectDemo;
