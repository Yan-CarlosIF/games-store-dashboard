import { Pedido } from "@/types/schema";
import { formatMoney } from "@/utils/formatMoney";

import OrderDetailsModal from "./order-details-modal";
import OrderStatus from "./order-status";

interface OrderCardProps {
  order: Pedido;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <tr className="flex items-center justify-between gap-12 rounded-lg border bg-gray-200/25 p-4">
      <td className="w-[30%] py-2.5 pl-10 text-left text-sm">{order.id}</td>
      <td className="w-[10%] text-center text-sm">
        {new Date(order.data).toLocaleDateString("pt-BR")}
      </td>
      <td className="w-[20%] truncate text-center text-sm">
        {order.cliente.nome}
      </td>
      <td className="w-[15%] text-center">
        <OrderStatus status={order.status} />
      </td>
      <td className="w-[20%] pr-5 text-left">
        <div className="inline-flex items-center gap-4">
          <span className="text-sm">{formatMoney(order.valorTotal)}</span>
          <OrderDetailsModal order={order} />
        </div>
      </td>
    </tr>
  );
}
