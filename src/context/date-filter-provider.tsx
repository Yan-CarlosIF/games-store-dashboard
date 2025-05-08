"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";

import { DateFilterContext } from "./date-filter-context";

export default function DateFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  return (
    <DateFilterContext.Provider value={{ date, setDate }}>
      {children}
    </DateFilterContext.Provider>
  );
}
