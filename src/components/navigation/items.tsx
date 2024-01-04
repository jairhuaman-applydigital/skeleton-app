import { cn } from "@/utils";
import Link from "next/link";
import { IMenuItem } from "../sidebar/data";

export function NavigationItems({ href, icon, label }: IMenuItem) {
  return (
    <li>
      <Link
        className={cn(
          "flex items-center gap-x-2 w-full p-[12px] hover:bg-gray-100",
        )}
        href={href}
      >
        <div className="w-[24px] h-[24px]">{icon}</div>
        <span>{label}</span>
      </Link>
    </li>
  );
}
