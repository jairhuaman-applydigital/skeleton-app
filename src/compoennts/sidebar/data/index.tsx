import { FunctionComponentElement, createElement } from "react";
import { HomeOutlined, UserOutlined, FolderOutlined, BoxPlotOutlined, EditOutlined, MessageOutlined } from '@ant-design/icons';

export interface IMenuItem {
    key: string;
    icon: FunctionComponentElement<unknown | any>,
    label: JSX.Element

}
const menuItems: IMenuItem[] = [
    {
        key: 'sidebar-menu-home',
        icon: createElement(HomeOutlined),
        label: (
            <a href="/dashboard/" >
                Home
            </a>
        ),
    },
    {
        key: 'sidebar-menu-account',
        icon: createElement(UserOutlined),
        label: (
            <a href="/dashboard/" >
                Account
            </a>
        ),
    },
    {
        key: 'sidebar-menu-files',
        icon: createElement(FolderOutlined),
        label: (
            <a href="/dashboard/" >
                Files
            </a>
        ),
    },
    {
        key: 'sidebar-menu-hardware',
        icon: createElement(BoxPlotOutlined),
        label: (
            <a href="/dashboard/" >
                Hardware
            </a>
        ),
    },
    {
        key: 'sidebar-menu-resources',
        icon: createElement(EditOutlined),
        label: (
            <a href="/dashboard/" >
                Resources
            </a>
        ),
    },
    {
        key: 'sidebar-menu-contact',
        icon: createElement(MessageOutlined),
        label: (
            <a href="/dashboard/" >
                Contact
            </a>
        ),
    },
]


export { menuItems }