import { cn } from "@/utils";

export default function HomeHeader() {
  return (
    <div
      className={cn(
        "w-full  px-0 h-[96px] flex items-center justify-center",
        "md:justify-between md:px-[30px] md:py-0 md:h-[64px]",
      )}
    >
      <h1>Logo</h1>
      <div className={cn("flex items-end")}>
        <a className="md:inline hidden" href="/home">
          Go to Main Site
        </a>
      </div>
    </div>
  );
}
