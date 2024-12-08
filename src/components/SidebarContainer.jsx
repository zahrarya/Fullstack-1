import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./SidebarComponent";

const SidebarContainer = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />

      {/* Your main content here */}
    </SidebarProvider>
  );
};

export default SidebarContainer;
