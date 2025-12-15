import { SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ children }) {
  return (
    <div className="flex w-full h-screen">
      <AppSidebar />

      <SidebarInset className="flex flex-col flex-1">
        <Topbar />

        <div className="flex-1 p-6 bg-gray-50">{children}</div>
      </SidebarInset>
    </div>
  );
}
