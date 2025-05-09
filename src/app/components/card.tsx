"use client";

import { differenceInDays } from "date-fns";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

import Bag from "@/../public/bag.svg";
import Box from "@/../public/box.svg";
import Order from "@/../public/order.svg";
import { DateFilterContext } from "@/context/date-filter-context";
import { Pedido } from "@/types/schema";
import { formatMoney } from "@/utils/formatMoney";

interface CardProps {
  icon: "bag" | "box" | "order";
  content: string;
  data: Pedido[];
}

export default function Card({ icon, content, data }: CardProps) {
  const src = icon === "bag" ? Bag : icon === "box" ? Box : Order;

  const { date } = useContext(DateFilterContext);

  const dateFrom = date?.from;
  const dateTo = date?.to;

  const ordersMadeOnDateFilter =
    dateFrom && dateTo
      ? data.filter((order) => {
          const orderDate = new Date(order.data);
          return orderDate >= dateFrom && orderDate <= dateTo;
        })
      : data;

  const totalRevenue =
    dateFrom && dateTo
      ? ordersMadeOnDateFilter.reduce(
          (total: number, order) =>
            order.status === "DELIVERED" ? total + order.valorTotal : total,
          0,
        )
      : data.reduce((total: number, order) => total + order.valorTotal, 0);

  let percentageOrdersMadeThisMonth = 0;

  const daysBetweenDates =
    dateFrom && dateTo && Math.abs(differenceInDays(dateFrom, dateTo));

  if (daysBetweenDates !== undefined && daysBetweenDates > 0) {
    percentageOrdersMadeThisMonth =
      daysBetweenDates === 0
        ? 0
        : (ordersMadeOnDateFilter.length /
            (data.length - ordersMadeOnDateFilter.length)) *
          100;
  }

  const percentageTotalRevenue = daysBetweenDates
    ? (totalRevenue /
        (data.reduce((total: number, order) => total + order.valorTotal, 0) -
          totalRevenue)) *
      100
    : 0;

  return (
    <div className="flex h-[174px] w-1/4 items-center justify-center overflow-hidden rounded-[14px] bg-white px-2 shadow-lg 2xl:px-0">
      <div className="flex gap-6">
        <div className="relative flex size-18 items-center rounded-full bg-green-400/15 pl-4 2xl:size-22">
          <Image src={src} className="size-12 2xl:size-14" alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-barlow mb-2 text-xl font-bold overflow-ellipsis text-[#464255] 2xl:text-4xl">
            {icon !== "bag"
              ? `${dateFrom && dateTo ? ordersMadeOnDateFilter.length : data.length}`
              : `${formatMoney(totalRevenue)}`}
          </h1>
          <span className="font-barlow text-black-200 text-sm leading-2">
            {content}
          </span>
          <span className="mt-2 flex items-center gap-1.5 text-xs text-[#464255]">
            <div
              className={twMerge(
                "flex size-5 items-center justify-center rounded-full bg-green-400/15",
                percentageOrdersMadeThisMonth < 0 && "bg-red-500/15",
                content === "Pedidos Cancelados" && "bg-red-500/15",
                percentageOrdersMadeThisMonth <= 0 &&
                  content === "Pedidos Cancelados" &&
                  "bg-green-400/15",
              )}
            >
              <ArrowUp
                size={12}
                className={twMerge(
                  "text-green-700",
                  percentageOrdersMadeThisMonth < 0 &&
                    "rotate-180 text-red-700",
                  content === "Pedidos Cancelados" &&
                    percentageOrdersMadeThisMonth > 0 &&
                    "text-red-700",
                  percentageOrdersMadeThisMonth <= 0 &&
                    content === "Pedidos Cancelados" &&
                    "rotate-180 text-green-700",
                )}
              />
            </div>
            {content === "Receita Total"
              ? percentageTotalRevenue.toFixed(0)
              : percentageOrdersMadeThisMonth.toFixed(0)}
            %{" "}
            {daysBetweenDates !== undefined &&
              `(${daysBetweenDates === 0 ? 1 : daysBetweenDates} ${
                daysBetweenDates === 0 ? "dia" : "dias"
              })`}
          </span>
        </div>
      </div>
    </div>
  );
}
