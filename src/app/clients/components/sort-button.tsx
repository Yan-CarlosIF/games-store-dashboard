"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const options = [
  {
    value: "mais-recentes",
    label: "Mais recentes",
  },
  {
    value: "mais-antigos",
    label: "Mais antigos",
  },
  {
    value: "mais-compras",
    label: "Mais compras",
  },
  {
    value: "menos-compras",
    label: "Menos compras",
  },
];

export default function SortButton() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="text-black-200/90 w-[200px] justify-between"
        >
          {value
            ? options.find((sortOption) => sortOption.value === value)?.label
            : "Filtros"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Escolha um filtro..." />
          <CommandList>
            <CommandEmpty color="#333333">
              Nenhum filtro encontrado.
            </CommandEmpty>
            <CommandGroup>
              {options.map((sortOption) => (
                <CommandItem
                  key={sortOption.value}
                  value={sortOption.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {sortOption.label}
                  <Check
                    className={twMerge(
                      "ml-auto",
                      value === sortOption.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
