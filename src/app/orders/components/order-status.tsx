import { Status } from "@/types/schema";
import { twMerge } from "tailwind-merge";

type OrderStatusProps = {
  status: Status;
};

const traductionMap: Record<Status, string> = {
  [Status.CANCELED]: "Cancelado",
  [Status.SHIPPING]: "Em envio",
  [Status.DELIVERED]: "Entregue",
};

export default function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div
      className={twMerge(
        "flex w-24 items-center justify-center rounded-sm bg-gray-300/30 px-2 py-2 text-xs font-semibold text-gray-600/80",
        traductionMap[status] === "Cancelado"
          ? "bg-red-300/30 text-red-600/80"
          : traductionMap[status] === "Entregue"
            ? "bg-green-300/30 text-green-600/80"
            : "bg-amber-300/30 text-amber-500",
      )}
    >
      {traductionMap[status]}
    </div>
  );
}
