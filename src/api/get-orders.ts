import { api } from "@/lib/axios";
import { Pedido } from "@/types/schema";

interface IGetOrders {
  delivered?: string;
  canceled?: string;
  shipping?: string;
}

export async function getOrders({ canceled, delivered, shipping }: IGetOrders) {
  const orders = (
    await api.get<Pedido[]>("/order/get", {
      params: { delivered, canceled, shipping },
    })
  ).data;

  return orders;
}
