import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import StyledComponentsRegistry from "@/components/antd/AntdRegistry";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <UserProvider>
            <ConfigProvider theme={{ hashed: false }}>
              {children}
            </ConfigProvider>
          </UserProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

/**
 * Config provider theme - hashed: false
 * This allow to override ant design classes otherwise will show the following class components
 * "css-dev-only-do-not-override"
 * Ref: https://github.com/ant-design/ant-design/issues/41926
 */
