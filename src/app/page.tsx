import { api } from "@/lib/axios";
import Card from "./components/card";
import DatePicker from "./components/date-picker";
import DateFilterProvider from "@/context/date-filter-provider";
import Charts from "./components/charts";

export default async function Home() {
  const orders = (await api.get<Order[]>("/order/get")).data;
  const ordersDelivered = (
    await api.get<Order[]>("/order/get", { params: { delivered: "true" } })
  ).data;
  const ordersCanceled = (
    await api.get<Order[]>("/order/get", { params: { canceled: "true" } })
  ).data;

  return (
    <DateFilterProvider>
      <main className="flex w-full flex-col px-12 py-10">
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
          <Card
            icon="order"
            content="Pedidos Cancelados"
            data={ordersCanceled}
          />
          <Card icon="bag" content="Receita Total" data={orders} />
        </div>
        <Charts />
      </main>
    </DateFilterProvider>
  );
}
