"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useContext } from "react";
import { CardContext } from "../_contexts/CartContext";

export function CardSheet() {
  const data = useContext(CardContext);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {data.card.map((card, index) => {
            return (
              <div key={index} className="flex gap-2">
                <h1>{card.food.name}</h1>
                <p>{Number(card.food.price) * card.quantity}</p>
                <p>{card.quantity}</p>
              </div>
            );
          })}
        </div>
        <SheetFooter>
          <Button type="submit">Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
