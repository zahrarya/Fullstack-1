// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import { Button } from "./ui/button";
import Dropdown from "./Dropdown";
import SidebarDropdown from "./Dropdown";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "All tasks",
    url: "/",
  },
  {
    title: "Important tasks",
    url: "/important",
  },
  {
    title: "Completed tasks",
    url: "/completed",
  },
  {
    title: "Uncompleted tasks",
    url: "/uncompleted",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <h3 className="my-7 font-bold text-center">To-Do List</h3>
          <Button className="mb-7">Add new task</Button>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      {/* <item.icon /> */}
                      <span className="text-slate-700">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarDropdown />
      </SidebarContent>
    </Sidebar>
  );
}
