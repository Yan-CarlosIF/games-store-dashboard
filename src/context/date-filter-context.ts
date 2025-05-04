import { createContext, Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

interface IDateFilter {
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
}

export const DateFilterContext = createContext({} as IDateFilter);
