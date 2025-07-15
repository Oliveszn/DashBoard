// import { ChartNoAxesCombined } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Fragment } from "react/jsx-runtime";
// const Sidebar = () => {
//   const navigate = useNavigate();
//   const adminSidebarMenuItems = [
//     {
//       id: "analytics",
//       label: "Analytics",
//       path: "analytics",
//     },
//     {
//       id: "dashboard",
//       label: "Dashboard",
//       path: "dashboard",
//     },
//   ];
//   return (
//     <Fragment>
//       <aside className="hidden w-56 flex-col border-r bg-background p-6 lg:flex">
//         <div
//           onClick={() => navigate("dashboard")}
//           className="flex cursor-pointer items-center gap-2"
//         >
//           <ChartNoAxesCombined size={20} />
//           <h6 className="text-xl font-extrabold">Panel</h6>
//         </div>
//         <nav className="mt-8 flex-col flex gap-2">
//           {adminSidebarMenuItems.map((menuItem) => (
//             <div
//               key={menuItem.id}
//               onClick={() => {
//                 navigate(menuItem.path);
//               }}
//               className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
//             >
//               <span>{menuItem.label}</span>
//             </div>
//           ))}
//         </nav>
//       </aside>
//     </Fragment>
//   );
// };

// export default Sidebar;

// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import AppSidebar from "../app-sidebar"

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main>
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//   )
// }
