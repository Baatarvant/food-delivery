import { ChangeEventHandler } from "react";
import { Category } from "./Categories";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategorySelectorProps = {
  categories: Category[];
  onSelect: (categoryId: number) => void;
};

export function CategorySelector(props: CategorySelectorProps) {
  const { categories, onSelect } = props;
  return (
    <Select onValueChange={(value) => onSelect(Number(value))}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {categories.map((category) => {
            return (
              <SelectItem key={category.id} value={String(category.id)}>
                {category.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
