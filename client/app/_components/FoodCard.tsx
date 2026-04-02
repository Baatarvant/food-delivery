"use client";

import { Food } from "@/lib/types/common";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useContext, useState } from "react";
import { CardContext } from "../_contexts/CartContext";

type FoodCardProps = {
  food: Food;
};

export const FoodCard = (props: FoodCardProps) => {
  const { card, addCard } = useContext(CardContext);

  console.log("card: ", card);

  const { food } = props;
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity - 1);
  };

  const onAdd = () => {
    addCard(food, quantity);
  };

  return (
    <div className="flex gap-2">
      {/* <h1>{food.name}</h1>
      <p>{food.price}</p> */}
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>{food.name}</CardTitle>
          <CardDescription>
            {Number(food.price).toLocaleString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <CircleMinus onClick={minusQuantity} />
            {quantity}
            <CirclePlus onClick={addQuantity} />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" onClick={onAdd}>
            add cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
