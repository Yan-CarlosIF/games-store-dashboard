import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

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
import { clientsFakeData } from "@/utils/fake-table-data";

import SortButton from "../components/sort-button";
import ClientsFooter from "./components/clients-footer";
import ClientsHeader from "./components/clients-header";

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
    value: "mais-compras",
    label: "Mais compras",
  },
  {
    value: "menos-compras",
    label: "Menos compras",
  },
];

export default function Clients() {
  const firstEightClients = clientsFakeData.slice(0, 7);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-black-200 ml-3 text-3xl font-semibold">Clientes</h1>
        <ClientsHeader />
      </div>
      <main className="mt-10 h-full w-full self-center rounded-3xl bg-white pt-10 shadow-xl">
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
        <Table className="mt-6 h-full">
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
          <TableBody>
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
        <ClientsFooter />
      </main>
    </>
  );
}
