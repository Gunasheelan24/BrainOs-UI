import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ItemsType {
  label: string;
  value: string;
}

export interface CustomSelectProps {
  items: ItemsType[];
  placeHolderName: string;
  icons: React.ReactNode;
  customClass?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  items,
  placeHolderName,
  icons,
  customClass,
}) => {
  return (
    <Select items={items}>
      <SelectTrigger className={customClass}>
        {icons}
        <SelectValue placeholder={placeHolderName} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
