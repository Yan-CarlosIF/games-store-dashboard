import { getOrders } from "@/api/get-orders";
import DateFilterProvider from "@/context/date-filter-provider";

import Card from "./components/card";
import Charts from "./components/charts";
import DatePicker from "./components/date-picker";

export default async function Home() {
  const orders = await getOrders({});
  const ordersDelivered = await getOrders({ delivered: "true" });
  const ordersCanceled = await getOrders({ canceled: "true" });

  return (
    <DateFilterProvider>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-black-200 text-3xl font-semibold">Dashboard</h1>
          <span className="text-xs text-gray-400">
            Seja bem vindo ao Dashboard da loja
          </span>
        </div>
        <DatePicker />
      </div>
      <div className="mt-10 flex gap-10">
        <Card icon="order" content="Total de Pedidos" data={orders} />
        <Card icon="box" content="Pedidos Entregue" data={ordersDelivered} />
        <Card icon="order" content="Pedidos Cancelados" data={ordersCanceled} />
        <Card icon="bag" content="Receita Total" data={orders} />
      </div>
      <Charts orders={orders} />
    </DateFilterProvider>
  );
}
