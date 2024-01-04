import { ReactNode, useEffect, useState } from "react";
import { menuItems } from "./data";

import useWindowWidth from "@/hooks/useWindowWidth";
import { cn } from "@/utils";
import DashboardHeader from "../header/dashboard-header";
import { Button } from "../button";
import { LayoutDashboard } from "lucide-react";
import { NavigationItems } from "../navigation/items";

interface Props {
  isCollapsed: boolean;
}
export default function Sidebar() {
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
    <>
      <DashboardHeader onToggleSidebar={toggleSidebar} />
      <div
        className={cn(
          "w-screen h-screen overflow-hidden bg-white absolute top-0",
          "md:w-[375px] relative"
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between px-4 h-[48px]",
            "md:hidden"
          )}
        >
          <h2>Header</h2>
          <Button size={"sm"} variant={"ghost"}>
            X
          </Button>
        </div>
        <ul>
          {menuItems.map((menuItem) => (
            <NavigationItems key={`${menuItem}-nav-item`} {...menuItem} />
          ))}
        </ul>
      </div>
    </>
    // <Layout className="overflow-hidden">
    //   <Header
    //     style={{ background: "transparent" }}
    //     className={cn(
    //       "flex items-center justify-between w-full absolute",
    //       "md:relative"
    //     )}
    //   >
    //     <p>Ideon</p>
    //     <Button
    //       className="sidebar-menu-button"
    //       onClick={toggleSidebar}
    //       type="dashed"
    //     >
    //       Menu
    //     </Button>
    //   </Header>

    //   <Layout
    //     className={cn("h-screen overflow-auto", "md:h-[calc(100vh_-_64px)]")}
    //   >
    //     <Sider
    //       theme="light"
    //       breakpoint="md"
    //       collapsedWidth="0"
    //       onBreakpoint={(broken) => {
    //         console.log(broken);
    //       }}
    //       onCollapse={(collapsed, type) => {
    //         console.log(collapsed, type);
    //       }}
    //       className="sidebar pb-8"
    //       trigger={null}
    //       collapsed={isCollapsed}
    //     >
    //       <div
    //         className={cn(
    //           "w-full flex justify-between px-[24px] h-[48px] items-center",
    //           "md:hidden"
    //         )}
    //       >
    //         <h2>Logo</h2>
    //         <Button
    //           style={{ border: "none" }}
    //           onClick={toggleSidebar}
    //           type="default"
    //         >
    //           <CloseOutlined />
    //         </Button>
    //       </div>
    //       <Menu
    //         mode="inline"
    //         defaultSelectedKeys={["sidebar-menu-home"]}
    //         items={menuItems}
    //       />
    //       <div className="px-[24px] mt-8">
    //         <Button type="default" block>
    //           Log out
    //         </Button>
    //       </div>
    //     </Sider>
    //     <Content className={cn("pt-[64px] overflow-auto", "md:pt-0")}>
    //       {children}
    //     </Content>
    //   </Layout>
    // </Layout>
  );
}
