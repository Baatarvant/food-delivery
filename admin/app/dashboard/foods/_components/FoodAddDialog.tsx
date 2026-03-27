"use client";

import { ChangeEventHandler, useState } from "react";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CategorySelector } from "./CategorySelector";
import { Category } from "@/lib/services/get-categories";

type FoodAddDialogProps = {
  categories: Category[];
};

export function FoodAddDialog(props: FoodAddDialogProps) {
  const { categories } = props;

  const [food, setFood] = useState<{
    foodName: string;
    price: number;
    categoryId: null | number;
    ingredients: string;
  }>({
    foodName: "",
    price: 0,
    categoryId: null,
    ingredients: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (
    event,
  ) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const onSelectCategory = (categoryId: number) => {
    setFood({
      ...food,
      categoryId: categoryId,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <Label className="min-w-[120px]">Dish Name</Label>
            <Input
              type="text"
              placeholder="Food name"
              name="foodName"
              onChange={handleChange}
            />
          </div>

          <CategorySelector
            categories={categories}
            onSelect={onSelectCategory}
          />
          <div className="flex">
            <Label className="min-w-[120px]">Ingredients</Label>
            <Input
              type="text"
              placeholder="Fluffy pancakes ..."
              name="ingredients"
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <Label className="min-w-[120px]">Price</Label>
            <Input
              type="number"
              placeholder="Food name"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
