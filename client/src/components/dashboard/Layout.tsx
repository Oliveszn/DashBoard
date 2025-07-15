import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../app-sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <Header />

          <main className="flex-1 flex flex-col bg-muted/40 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
