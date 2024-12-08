import { useState } from "react";
import { Dropdown, DropdownItem, NavLink } from "react-bootstrap";
import { ChevronDownIcon } from "@heroicons/react/outline";
import DialogDemo from "./Dialog";
import AlertDialogDemo from "./DeleteDialog";

const SidebarDropdown = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={NavLink}
        className="bg-slate-50 border-none focus:outline-none px-2 text-left text-slate-700"
        onClick={handleToggle}
      >
        <ChevronDownIcon className="chevron-down h-4 w-4 inline-block mr-2 text-slate-700" />
        Directories
      </Dropdown.Toggle>
      <Dropdown.Menu show={show} className="text-start flex flex-col">
        <DropdownItem className="ml-16 text-start block text-slate-700 flex">
          <p>secondary</p>
          <DialogDemo />
          <AlertDialogDemo />
        </DropdownItem>

        <DropdownItem className="ml-4 text-start text-slate-700">
          Main
        </DropdownItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SidebarDropdown;
