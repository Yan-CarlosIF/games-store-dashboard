import { ArrowUpDown } from "lucide-react";

import { getOrders } from "@/api/get-orders";

import PaginationComponent from "../components/pagination";
import SortButton from "../components/sort-button";
import OrderCard from "./components/order-card";

const filterOptions = [
  {
    value: "mais-recentes",
    label: "Mais recentes",
  },
  {
    value: "mais-antigos",
    label: "Mais antigos",
  },
  {
    value: "entregue",
    label: "Entregue",
  },
  {
    value: "cancelado",
    label: "Cancelado",
  },
  {
    value: "em-envio",
    label: "Em envio",
  },
];

type Keys = "offset" | "sort";

type SearchParams = Promise<{ [k in Keys]: string | undefined }>;

export default async function Orders({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const canceled = params.sort === "cancelado" ? "true" : "false";
  const delivered = params.sort === "entregue" ? "true" : "false";
  const shipping = params.sort === "em-envio" ? "true" : "false";

  const offset = parseInt(params.offset ?? "0");
  const sort = params.sort;

  const orders = await getOrders({ canceled, delivered, shipping });

  let filteredOrders = orders;

  if (sort === "mais-recentes") {
    filteredOrders.sort((a, b) => {
      return (
        new Date(b.data as string).getTime() -
        new Date(a.data as string).getTime()
      );
    });
  } else if (sort === "mais-antigos") {
    filteredOrders.sort((a, b) => {
      return (
        new Date(a.data as string).getTime() -
        new Date(b.data as string).getTime()
      );
    });
  } else if (sort === "cancelado") {
    filteredOrders = filteredOrders.filter(
      (order) => order.status === "CANCELED",
    );
  } else if (sort === "em-envio") {
    filteredOrders = filteredOrders.filter(
      (order) => order.status === "SHIPPING",
    );
  } else if (sort === "entregue") {
    filteredOrders = filteredOrders.filter(
      (order) => order.status === "DELIVERED",
    );
  }

  const firstSixOrders = sort
    ? orders.slice(offset, offset + 6)
    : orders.slice(offset, offset + 6);

  const ordersLength = sort ? filteredOrders.length : orders.length;

  return (
    <>
      <h1 className="text-black-200 text-3xl font-semibold">Pedidos</h1>
      <nav className="mt-10 flex h-full flex-col rounded-2xl bg-white py-6 shadow-lg">
        <div className="mx-10 flex items-center justify-between">
          <h1 className="text-black-200 font-barlow text-3xl font-bold">
            Tabela de Pedidos
          </h1>
          <SortButton options={filterOptions} />
        </div>
        <table className="mt-8 h-full w-full table-fixed">
          <thead className="text-sm text-gray-400">
            <tr className="flex w-full items-center bg-gray-200/20 px-14">
              <th className="w-[30%] pl-10 text-left text-sm">
                <div>Id</div>
              </th>
              <th className="w-[10%] py-4 text-xs">
                <div className="flex items-center justify-center gap-5">
                  <ArrowUpDown size={16} />
                  <span>Data</span>
                </div>
              </th>
              <th className="w-[20%] text-xs">
                <div className="flex items-center justify-center gap-5">
                  <ArrowUpDown size={16} />
                  <span>Cliente</span>
                </div>
              </th>
              <th className="w-[15%] text-xs">
                <div className="flex items-center justify-center gap-5">
                  <ArrowUpDown size={16} />
                  <span>Status</span>
                </div>
              </th>
              <th className="w-[20%] pr-5 text-xs">
                <div className="flex items-center justify-center gap-5">
                  <ArrowUpDown size={16} />
                  <span>Valor Total</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="m-8 flex flex-col gap-3">
            {firstSixOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </tbody>
          <tfoot className="mt-auto">
            <tr>
              <td className="flex items-center justify-between px-10">
                <span className="text-sm text-gray-400">
                  Mostrando {offset + 1} a{" "}
                  {offset + 6 > ordersLength ? ordersLength : offset + 6} de{" "}
                  {ordersLength}
                </span>
                <PaginationComponent limit={Math.ceil(ordersLength / 6)} />
              </td>
            </tr>
          </tfoot>
        </table>
      </nav>
    </>
  );
}
