import { ReactNode, useEffect, useState } from "react";
import DashboardHeader from "../header/dashboard-header";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Sidebar } from "../sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [userToggled, setUserToggled] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (!!width) {
      if (width >= 768) {
        setIsCollapsed(false);
        setUserToggled(false);
      } else if (!userToggled) {
        setIsCollapsed(true);
      }
    }
  }, [width, userToggled]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setUserToggled(true);
  };

  return (
    <div className="flex w-screen h-screen flex-col relative">
      <DashboardHeader onToggleSidebar={toggleSidebar} />

      <div className="flex">
        {!isCollapsed && <Sidebar toggleSidebar={toggleSidebar} />}
        <div>{children}</div>
      </div>
    </div>
  );
}
