"use client";
import { Button } from "antd";

import HomeHeader from "../header/home-header";
import { cn } from "@/utils";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function HomeLayout() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  // CHECK: apparently if these lines are available the button styles change
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    <>
      <HomeHeader />
      <div
        className={cn(
          "flex flex-col items-center max-w-[600px]  px-[40px] mx-auto pt-[20px] h-[calc(100%_-_200px)]",
          "md:h-[calc(100%_-_120px)] md:justify-center md:pt-[0px]"
        )}
      >
        <h2 className={cn("text-4xl mb-[40px] font-bold", "md:mb-[20px]")}>
          A Portal
        </h2>
        <p className="text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing esse voluptate,
          rerum dol
        </p>

        {!user && (
          <Button
            style={{ height: "60px" }}
            className={cn("my-[40px]")}
            size="large"
            type="primary"
            block
            onClick={() => router.push("/api/auth/login")}
          >
            Log In
          </Button>
        )}

        <p className="mt-4">
          Don&apos;t have an account?
          <a className="ml-2 underline" href="/">
            Get in Touch
          </a>{" "}
        </p>
      </div>
      <div
        className={cn(
          "flex flex-col items-center text-[10px] ",
          "md:text-[12px] md:flex-row md:justify-around md:max-w-[800px] md:mx-auto"
        )}
      >
        <a
          className={cn("inline text-base underline mb-[24px]", "md:hidden")}
          href="/"
        >
          Go to Main Site
        </a>
        <p>© 2023 IDEON TECHNOLOGIES INC. ALL RIGHTS RESERVED</p>
        <div
          className={cn("flex items-center gap-x-4 mt-[12px]", "md:mt-[0px] ")}
        >
          <a className="underline" href="/">
            PRIVACY POLICY
          </a>
          <a className="underline" href="/">
            {" "}
            CODE OF ETHICS AND CONDUCT
          </a>
        </div>
      </div>
    </>
  );
}
