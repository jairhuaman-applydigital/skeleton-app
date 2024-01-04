import { cn } from "@/utils";
import { Button } from "../button";


interface Props {
  onToggleSidebar: () => void
}
export default function DashboardHeader({onToggleSidebar}:Props) {
  return (
    <div className={cn(
      "w-full  flex items-center justify-between h-[64px] px-3",
      "md:justify-start"
      )}>
      <h2>Ideon</h2>

      <Button onClick={onToggleSidebar} className={cn("h-[40px]", "md:hidden")}>Menu</Button>
    </div>
  );
}
