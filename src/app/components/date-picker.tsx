"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { DateFilterContext } from "@/context/date-filter-context";

export default function DatePicker() {
  const { date, setDate } = useContext(DateFilterContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-[230px] cursor-pointer items-center rounded-[12px] bg-white p-3 shadow-lg"
        >
          <div className="flex items-center justify-center rounded-[12px] bg-blue-400/30 p-1.5 text-blue-400">
            <CalendarIcon />
          </div>
          <div className="text-black-200 flex w-full flex-col items-center">
            <h1 className="text-sm">Filtro de Período</h1>
            {date?.from ? (
              date.to ? (
                <span className="text-[10px]">
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </span>
              ) : (
                <span className="text-[10px]">
                  {format(date.from, "LLL dd, y")}
                </span>
              )
            ) : (
              <span className="text-[10px]">Selecione uma data</span>
            )}
          </div>
          <ChevronDown
            width={30}
            strokeWidth={1.2}
            className={twMerge(
              "text-black-200 transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
        />
      </PopoverContent>
    </Popover>
  );
}
