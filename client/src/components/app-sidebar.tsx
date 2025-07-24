import {
  BadgeCheck,
  LayoutDashboard,
  Package,
  PackagePlus,
  Settings,
  ShoppingBag,
  UserCheck,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Separator } from "./ui/separator";

const AppSidebar = () => {
  const MenuItems = [
    {
      title: "Dashboard",
      links: [
        {
          label: "Dashboard",
          path: "dashboard",
          icon: LayoutDashboard,
        },
        {
          label: "Analytics",
          path: "analytics",
          icon: BadgeCheck,
        },
      ],
    },
    {
      title: "Customers",
      links: [
        {
          label: "Customers",
          icon: Users,
          path: "customers",
        },
        {
          label: "Verified customers",
          icon: UserCheck,
          path: "verified-customers",
        },
      ],
    },
    {
      title: "Products",
      links: [
        {
          label: "Products",
          icon: Package,
          path: "products",
        },
        {
          label: "New product",
          icon: PackagePlus,
          path: "new-product",
        },
        {
          label: "Inventory",
          icon: ShoppingBag,
          path: "inventory",
        },
      ],
    },
    {
      title: "Settings",
      links: [
        {
          label: "Settings",
          icon: Settings,
          path: "settings",
        },
      ],
    },
  ];

  return (
    <Sidebar variant="floating">
      <SidebarHeader className="text-2xl mb-6 px-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold text-sm">
              M
            </span>
          </div>
          <span className="text-sidebar-foreground">MedApp</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {MenuItems.flatMap((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <div className="mb-3">
                    <h1 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider px-3 mb-2 ">
                      {item.title}
                    </h1>

                    <div className="space-y-1">
                      {item.links.map((link) => (
                        <SidebarMenuButton asChild key={link.label}>
                          <a href={link.path} className="relative">
                            <link.icon className="w-4 h-4 text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground transition-colors" />
                            <span className="font-medium md:text-lg">
                              {link.label}
                            </span>
                            <div className="absolute inset-0 rounded-lg ring-2 ring-transparent group-hover:ring-sidebar-ring/20 transition-all duration-200"></div>
                          </a>
                        </SidebarMenuButton>
                      ))}
                    </div>
                  </div>
                  {/* ///this seperator is to add a line after each section */}
                  {index < MenuItems.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
