import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <AdminSideBar />
      <div className="flex flex-1 flex-col">
        <AdminHeader />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
