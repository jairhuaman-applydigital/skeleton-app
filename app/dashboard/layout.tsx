'use client';
import Sidebar from "@/src/compoennts/sidebar/sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <Sidebar >
            {children}
        </Sidebar>

    )
}