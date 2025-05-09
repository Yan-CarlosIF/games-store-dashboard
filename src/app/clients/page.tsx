import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { getClients } from "@/api/get-clients";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import PaginationComponent from "../components/pagination";
import SortButton from "../components/sort-button";
import ClientsHeader from "./components/clients-header";

const filterOptions = [
  {
    value: "ordem-alfabetica",
    label: "Ordem alfabética",
  },
  {
    value: "mais-compras",
    label: "Mais compras",
  },
  {
    value: "menos-compras",
    label: "Menos compras",
  },
];

type Keys = "offset" | "sort" | "search";

type SearchParams = Promise<{ [k in Keys]: string | undefined }>;

export default async function Clients({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const offset = parseInt(params.offset ?? "0");
  const sort = params.sort;
  const search = params.search || "";

  const clients = await getClients();

  const filteredClients =
    search !== ""
      ? clients.filter((client) => {
          if (client.nome.toLowerCase().includes(search.toLowerCase())) {
            return client;
          }
        })
      : clients;

  if (sort === "mais-compras") {
    filteredClients.sort((a, b) => b.pedidos.length - a.pedidos.length);
  } else if (sort === "menos-compras") {
    filteredClients.sort((a, b) => a.pedidos.length - b.pedidos.length);
  } else if (sort === "ordem-alfabetica") {
    filteredClients.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  const firstEightClients =
    sort || search
      ? filteredClients.slice(offset, offset + 7)
      : clients.slice(offset, offset + 7);

  const clientsLength = sort ? filteredClients.length : clients.length;

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-black-200 ml-3 text-3xl font-semibold">Clientes</h1>
        <ClientsHeader clients={clients} />
      </div>
      <main className="mt-10 flex h-full w-full flex-col self-center rounded-3xl bg-white pt-10 shadow-xl">
        <div className="flex items-center justify-between px-10">
          <div className="flex flex-col">
            <h1 className="text-black-200 text-2xl font-bold">
              Todos os clientes
            </h1>
            <span className="mt-2 text-sm text-green-500">Clientes ativos</span>
          </div>
          <div className="flex gap-5">
            <div className="group relative w-full max-w-xs rounded-xl bg-white">
              <Search className="text-muted-foreground absolute top-4.5 left-3 h-4 w-4 -translate-y-1/2 duration-200 ease-in-out group-focus-within:text-green-500" />
              <Input
                type="text"
                placeholder="Filtrar por nome"
                className="pl-10 focus-visible:border-green-500 focus-visible:ring-green-200"
              />
            </div>
            <SortButton options={filterOptions} />
          </div>
        </div>
        <Table className="mt-6">
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground pl-10">
                Nome do cliente
              </TableHead>
              <TableHead className="text-muted-foreground">Telefone</TableHead>
              <TableHead className="text-muted-foreground">Email</TableHead>
              <TableHead className="text-muted-foreground">Endereço</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="h-full">
            {firstEightClients.map((cliente) => (
              <TableRow key={cliente.cpf}>
                <TableCell className="py-4 pl-10">{cliente.nome}</TableCell>
                <TableCell>{cliente.telefone}</TableCell>
                <TableCell>{cliente.email}</TableCell>
                <TableCell>
                  {cliente.cidade} - {cliente.rua}, {cliente.numeroCasa}
                </TableCell>
                <TableCell>
                  <div
                    className={twMerge(
                      "w-20 rounded-sm border-1 py-1.5 text-center text-xs font-semibold",
                      cliente.pedidos.length
                        ? "bg-green-label/38 border-green-700 text-green-700"
                        : "border-red-700 bg-red-200 text-red-700",
                    )}
                  >
                    {cliente.pedidos.length ? "Ativo" : "Inativo"}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Separator />
        <div className="mx-10 mt-auto flex w-full items-center justify-between pb-5">
          <span className="w-fit text-sm text-nowrap text-gray-500">
            Mostrando dados {offset + 1} a{" "}
            {offset + 7 > clientsLength ? clientsLength : offset + 7} de{" "}
            {clientsLength} clientes
          </span>
          <PaginationComponent
            className="h-fit pr-20"
            limit={Math.ceil(clientsLength / 7)}
          />
        </div>
      </main>
    </>
  );
}
