"use client";

import Bag from "@/../public/bag.svg";
import Box from "@/../public/box.svg";
import Order from "@/../public/order.svg";
import { DateFilterContext } from "@/context/date-filter-context";
import { Pedido } from "@/types/schema";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

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

  const ordersMadeThisMonth = data.filter(
    (order) => order.data.getMonth() === new Date().getMonth(),
  );

  const totalRevenue = ordersMadeThisMonth.reduce(
    (total: number, order) => total + order.valorTotal,
    0,
  );

  let percentageOrdersMadeThisMonth = 0;

  if (icon !== "bag") {
    if (ordersMadeThisMonth.length > 0) {
      percentageOrdersMadeThisMonth =
        (ordersMadeOnDateFilter.length / ordersMadeThisMonth.length) * 100;
    } else {
      const totalFilteredRevenue = ordersMadeOnDateFilter.reduce(
        (total: number, order) => total + order.valorTotal,
        0,
      );

      percentageOrdersMadeThisMonth =
        totalFilteredRevenue > 0
          ? (totalRevenue / totalFilteredRevenue) * 100
          : 0;
    }
  }

  return (
    <div className="flex h-[174px] w-1/4 items-center justify-center rounded-[14px] bg-white shadow-lg">
      <div className="flex gap-6">
        <div className="relative flex size-22 items-center rounded-full bg-green-400/15 pl-4">
          <Image src={src} alt="" />
        </div>
        <div className="mt-[-10px] flex flex-col">
          <h1 className="font-barlow text-[46px] font-bold text-[#464255]">
            {icon !== "bag" ? data.length : `$${totalRevenue}`}
          </h1>
          <span className="font-barlow text-black-200 text-sm leading-2">
            {content}
          </span>
          <span className="mt-2 flex items-center gap-1.5 text-xs text-[#464255]">
            <div
              className={twMerge(
                "flex size-5 items-center justify-center rounded-full bg-green-400/15",
                percentageOrdersMadeThisMonth < 0 && "bg-red-500/15",
              )}
            >
              <ArrowUp
                size={12}
                className={twMerge(
                  "text-green-700",
                  percentageOrdersMadeThisMonth < 0 &&
                    "rotate-180 text-red-700",
                )}
              />
            </div>
            {percentageOrdersMadeThisMonth}% (30 dias)
          </span>
        </div>
      </div>
    </div>
  );
}
