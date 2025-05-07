import { api } from "@/lib/axios";
import { Pedido } from "@/types/schema";

interface IGetOrders {
  delivered?: string;
  canceled?: string;
}

export async function getOrders({ canceled, delivered }: IGetOrders) {
  const orders = (
    await api.get<Pedido[]>("/order/get", { params: { delivered, canceled } })
  ).data;

  return orders;
}
