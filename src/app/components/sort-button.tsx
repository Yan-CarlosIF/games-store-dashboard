"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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
import { useRouter, useSearchParams } from "next/navigation";

interface SortButtonProps {
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
}

export default function SortButton({ options, className }: SortButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (value !== "") {
      params.set("sort", value);
      router.push(`?${params.toString()}`);
    } else {
      params.delete("sort");
      router.push(`?${params.toString()}`);
    }
  }, [value, router]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={twMerge(
            "text-black-200/90 w-[200px] justify-between",
            className,
          )}
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
