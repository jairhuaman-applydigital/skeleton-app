import { cn } from "@/utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function HomeHeader() {
  const { user, error, isLoading } = useUser();

  console.log(user)
  return (
    <div
      className={cn(
        "w-full  px-0 h-[96px] flex items-center justify-center",
        "md:justify-between md:px-[30px] md:py-0 md:h-[64px]"
      )}
    >
      <h1>Logo</h1>
      <div className={cn("flex items-end")}>
        {user && (
          <>
            <p className="md:inline hidden">Welcome, {user?.name}</p>
            <Link className="md:inline px-3" href="/api/auth/logout">
              Log out
            </Link>
          </>
        )}
        <a className="md:inline hidden" href="/home">
          Go to Main Site
        </a>
      </div>
    </div>
  );
}
