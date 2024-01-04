import { menuItems } from "./data";
import { cn } from "@/utils";
import { Button } from "../button";
import { NavigationItems } from "../navigation/items";

interface Props {
  toggleSidebar: () => void;
}
export default function Sidebar({ toggleSidebar }: Props) {
  return (
    <>
      <div
        className={cn(
          " w-full h-full overflow-hidden bg-white absolute top-0",
          "md:w-[375px] md:relative ",
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between px-4 h-[48px]",
            "md:hidden",
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
    </>
  );
}
