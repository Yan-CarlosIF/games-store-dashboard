"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-black-200 text-3xl font-semibold">Dashboard</h1>
            <span className="text-xs text-gray-400">
              Seja bem vindo ao Dashboard da loja
            </span>
          </div>
        </div>
        <Skeleton className="h-12 w-[230px] rounded-[12px] bg-white shadow-lg" />
      </div>

      {/* Cards */}
      <div className="mt-10 flex gap-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-[174px] w-1/4 rounded-[14px] bg-white shadow-lg"
          />
        ))}
      </div>

      {/* Charts */}
      <div className="mt-10 flex gap-10">
        <Skeleton className="h-[520px] w-1/2 rounded-[12px] bg-white shadow-lg" />
        <Skeleton className="h-[520px] w-1/2 rounded-[12px] bg-white shadow-lg" />
      </div>
    </div>
  );
}
