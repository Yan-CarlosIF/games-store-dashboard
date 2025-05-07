import { ArrowUpDown } from "lucide-react";
import SortButton from "../components/sort-button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ordersFakeData } from "@/utils/fake-table-data";
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
    value: "jogo",
    label: "Jogo",
  },
  {
    value: "eletronico",
    label: "Eletrônico",
  },
];

export default function Orders() {
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
        <table className="mt-8 h-full w-full">
          <thead className="text-sm text-gray-400">
            <tr className="flex w-full bg-gray-200/20 px-14">
              <th className="w-[21%] py-2.5 pl-10 text-left text-sm">
                <div>Id</div>
              </th>
              <th className="flex w-[15%] items-center justify-center gap-5 text-xs">
                <ArrowUpDown size={16} />
                <span>Data</span>
              </th>
              <th className="flex w-[15%] items-center justify-center gap-5 text-xs">
                <ArrowUpDown size={16} />
                <span>Cliente</span>
              </th>
              <th className="flex w-[15%] items-center justify-center gap-5 text-xs">
                <ArrowUpDown size={16} />
                <span>Status</span>
              </th>
              <th className="flex w-[20%] items-center justify-center gap-5 pr-5 text-xs">
                <ArrowUpDown size={16} />
                <span>Valor Total</span>
              </th>
            </tr>
          </thead>
          <tbody className="m-8 flex flex-col gap-3">
            {ordersFakeData.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </tbody>
          <tfoot className="mt-auto">
            <tr>
              <td className="flex items-center justify-between px-10">
                <span className="text-sm text-gray-400">
                  Mostrando 1 a 6 de 300
                </span>
                <Pagination className="mx-0 flex w-fit">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </td>
            </tr>
          </tfoot>
        </table>
      </nav>
    </>
  );
}
