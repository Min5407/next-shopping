import { ICONS } from "@/assets/icon";
import Link from "next/link";

export const HeaderNav = () => {
  return (
    <header className="z-999 sticky inset-x-0 top-0 m-auto flex h-16 w-screen justify-between bg-white px-12 py-5">
      <h1>
        <Link href="/">
          <ICONS.LOGO className="h-10 w-10" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>lids</li>
        </ul>
      </nav>
    </header>
  );
};
