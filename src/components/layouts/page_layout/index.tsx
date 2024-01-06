import { cn } from "@/lib/tailwind";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const PageLayout = ({ children, className }: Props) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-2 md:px-20", className)}
    >
      {children}
    </div>
  );
};
