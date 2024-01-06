"use client";

import { CustomSheet } from "@/components/custom_sheet";
import { ICONS } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Cart = () => {
  return (
    <CustomSheet
      TitleElement={<h4>Cart 0</h4>}
      TriggerElement={
        <ICONS.SHOPPING_CART
          aria-hidden="true"
          className="h-6 w-6 text-gray-400 group-hover:text-primary"
        />
      }
    >
      content
    </CustomSheet>
  );
};
