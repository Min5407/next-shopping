import { ICONS } from "@/components/icons";
import Link from "next/link";
import { Navigation } from "./components/navigation";

export const HeaderNav = () => {
  return (
    <header className="items-center z-999 sticky inset-x-0 top-0 m-auto flex h-16 w-screen justify-between bg-white px-4 md:px-10 py-5 border-b border-slate-500 border-solid">
      <h1>
        <Link href="/">
          <ICONS.LOGO className="h-10 w-10" />
        </Link>
      </h1>
      <Navigation />
    </header>
  );
};
