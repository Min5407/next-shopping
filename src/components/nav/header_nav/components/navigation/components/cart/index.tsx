"use client";

import { CustomSheet } from "@/components/custom_sheet";
import { ICONS } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const Cart = () => {
  return (
    <CustomSheet
      TitleElement={<h2 className="text-center font-bold text-lg">Cart (0)</h2>}
      TriggerElement={
        <ICONS.SHOPPING_CART
          aria-hidden="true"
          className="h-6 w-6 text-gray-400 group-hover:text-primary"
        />
      }
      FooterElement={<Button>Checkout</Button>}
    >
      <p className="text-gray-500 border-b border-slate-50000 py-3 my-3">
        Cart Items
      </p>

      <div className="overflow-auto">
        <div className="flex justify-between p-3 mb-3">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between p-3 mb-3">
          <span>Shipping</span>
          <span>Free</span>
        </div>
      </div>
    </CustomSheet>
  );
};
