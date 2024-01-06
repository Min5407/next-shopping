import { ICONS } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Cart } from "./components/cart";
import { Avatar } from "@/components/ui/avatar";
import { ProfileAvatar } from "@/components/avatar";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-2 items-center">
        <li>
          <Link
            href="/icons"
            className={buttonVariants({
              variant: "ghost",
              className: "hover:text-primary hidden md:inline-block",
            })}
          >
            Icons
          </Link>
        </li>
        <li>
          <Link
            href="/themes"
            className={buttonVariants({
              variant: "ghost",
              className: "hover:text-primary hidden md:inline-block",
            })}
          >
            Themes
          </Link>
        </li>
        <li>
          <Link
            href="/themes"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            <ProfileAvatar
              src="https://github.com/shadcn.png"
              alt="shadui"
              className="h-6 w-6 mr-2"
            />
            Profile
          </Link>
        </li>
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
};
