"use client";

import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "../ui/sheet";
import { ReactNode } from "react";

type Props = {
  TriggerElement: ReactNode;
  TitleElement: ReactNode;
  children: ReactNode;
  FooterElement?: ReactNode;
};
export const CustomSheet = ({
  TriggerElement,
  TitleElement,
  children,
  FooterElement,
}: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="group">{TriggerElement}</SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>{TitleElement}</SheetTitle>
        </SheetHeader>
        <SheetDescription className="flex-1 flex-grow">
          {children}
        </SheetDescription>
        <SheetFooter>{FooterElement}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
