import { ReactNode, useEffect, useState } from "react";
import DashboardHeader from "../header/dashboard-header";
import { Sidebar } from "../sidebar";
import { cn } from "@/utils";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Button } from "../button";
import { menuItems } from "../sidebar/data";
import { NavigationItems } from "../navigation/items";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [userToggled, setUserToggled] = useState<boolean>(false);
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
        {!isCollapsed && (
          <div
            className={cn(
              " w-full h-full overflow-hidden bg-white absolute top-0",
              "md:w-[375px] md:relative "
            )}
          >
            <div
              className={cn(
                "flex w-full items-center justify-between px-4 h-[48px]",
                "md:hidden"
              )}
            >
              <h2>Header</h2>
              <Button onClick={toggleSidebar} size={"sm"} variant={"ghost"}>
                X
              </Button>
            </div>
            <ul>
              {menuItems.map((menuItem) => (
                <NavigationItems key={`${menuItem}-nav-item`} {...menuItem} />
              ))}
            </ul>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
