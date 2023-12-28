import { FunctionComponentElement, createElement } from "react";
import { HomeOutlined, UserOutlined, FolderOutlined, BoxPlotOutlined, EditOutlined, MessageOutlined } from "@ant-design/icons";
import Link from "next/link";

export interface IMenuItem {
    key: string;
    icon: FunctionComponentElement<unknown | any>,
    label: JSX.Element

}
const menuItems: IMenuItem[] = [
  {
    key: "sidebar-menu-home",
    icon: createElement(HomeOutlined),
    label: (
      <Link href="/dashboard/" >
                Home
      </Link>
    ),
  },
  {
    key: "sidebar-menu-account",
    icon: createElement(UserOutlined),
    label: (
      <Link href="/dashboard/" >
                Account
      </Link>
    ),
  },
  {
    key: "sidebar-menu-files",
    icon: createElement(FolderOutlined),
    label: (
      <Link href="/dashboard/" >
                Files
      </Link>
    ),
  },
  {
    key: "sidebar-menu-hardware",
    icon: createElement(BoxPlotOutlined),
    label: (
      <Link href="/dashboard/" >
                Hardware
      </Link>
    ),
  },
  {
    key: "sidebar-menu-resources",
    icon: createElement(EditOutlined),
    label: (
      <Link href="/dashboard/" >
                Resources
      </Link>
    ),
  },
  {
    key: "sidebar-menu-contact",
    icon: createElement(MessageOutlined),
    label: (
      <Link href="/dashboard/" >
                Contact
      </Link>
    ),
  },
];


export { menuItems };