import { FunctionComponentElement, ReactNode } from "react";
import { HomeIcon, PersonStanding } from "lucide-react";

export interface IMenuItem {
  icon: ReactNode;
  label: string;
  href:string;
}
const menuItems: IMenuItem[] = [
  {
    icon: <HomeIcon />,
    label: "Home",
    href:'/dashboard'
  },
  {
    icon: <PersonStanding />,
    label: "Account",
    href:'/dashboard/account'
  },
];

export { menuItems };
