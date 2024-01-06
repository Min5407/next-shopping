import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/tailwind";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="mx-auto flex flex-col items-center py-8 md:mb-9">
      <h2 className="mb-5 mt-4 text-center text-3xl font-bold tracking-tight md:text-5xl">
        <span className="text-primary">Welcome</span> To Hippo Shopping Mall
      </h2>
      <p className="mb-5 text-center text-xl text-muted-foreground md:text-2xl">
        Hand-pick your items that you want to buy
      </p>
      <Link href="/products" className={cn(buttonVariants(), "text-base")}>
        View Products
      </Link>
    </section>
  );
};
