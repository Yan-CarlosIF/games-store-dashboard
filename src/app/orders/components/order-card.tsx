import { Pedido } from "@/types/schema";
import { formatMoney } from "@/utils/formatMoney";
import OrderStatus from "./order-status";
import OrderDetailsModal from "./order-details-modal";

interface OrderCardProps {
  order: Pedido;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <tr className="flex items-center gap-32 rounded-lg border bg-gray-200/25 p-4 pl-12">
      <td className="w-[17%]">
        <h1 className="text-left text-sm text-nowrap">{order.id}</h1>
      </td>
      <td>
        <h1 className="text-left text-sm">{`0${order.data.getDay()}/0${order.data.getMonth()}/${order.data.getFullYear()}`}</h1>
      </td>
      <td className="w-[8%]">
        <h1 className="text-left text-sm">{order.cliente.nome}</h1>
      </td>
      <td>
        <OrderStatus status={order.status} />
      </td>
      <td className="w-[12.5%]">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-left text-sm">
              {formatMoney(order.valorTotal)}
            </h1>
          </div>
          <OrderDetailsModal order={order} />
        </div>
      </td>
    </tr>
  );
}
