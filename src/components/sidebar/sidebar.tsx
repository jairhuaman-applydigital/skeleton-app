import { Button, Layout, Menu, theme } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { ReactNode, useEffect, useState } from "react";
import { menuItems } from "./data";
import { Header } from "antd/es/layout/layout";
import useWindowWidth from "@/hooks/useWindowWidth";
import { cn } from "@/utils";

const { Content, Sider } = Layout;

export default function Sidebar({ children }: { children: ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
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
        <Layout className="overflow-hidden">
            <Header
                style={{ background: "transparent" }}
                className={cn(
                    "flex items-center justify-between w-full absolute",
                    "md:relative"
                )}
            >
                <p>Ideon</p>
                <Button
                    className={cn("md:hidden")}
                    onClick={toggleSidebar}
                    type="dashed"
                >
                    Menu
                </Button>
            </Header>

            <Layout
                className={cn("h-screen overflow-auto", "md:h-[calc(100vh_-_64px)]")}
            >
                <Sider
                    theme="light"
                    breakpoint="md"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    className="sidebar pb-8"
                    trigger={null}
                    collapsed={isCollapsed}
                >
                    <div
                        className={cn(
                            "w-full flex justify-between px-[24px] h-[48px] items-center",
                            "md:hidden"
                        )}
                    >
                        <h2>Logo</h2>
                        <Button
                            style={{ border: 'none' }}
                            onClick={toggleSidebar}
                            type="default"
                        >
                            <CloseOutlined />
                        </Button>
                    </div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["sidebar-menu-home"]}
                        items={menuItems}
                    />
                    <div className="px-[24px] mt-8">
                        <Button type="default" block>
                            Log out
                        </Button>
                    </div>
                </Sider>
                <Content className={cn("pt-[64px] overflow-auto", "md:pt-0")}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
