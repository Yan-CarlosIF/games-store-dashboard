import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ClientsPageLoading() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-black-200 ml-3 text-3xl font-semibold">Clientes</h1>
        <header className="mt-5 flex h-[125px] w-fit items-center justify-center rounded-4xl bg-white px-10 py-8 shadow-md">
          <div className="flex gap-5">
            <div className="flex size-18 items-center justify-center rounded-full bg-green-100">
              <Skeleton className="h-9 w-9 rounded-full bg-green-600" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
          <div className="mx-14 h-22 w-[1px] rounded-full bg-[#F0F0F0]" />
          <div className="flex gap-5">
            <div className="flex size-18 items-center justify-center rounded-full bg-green-100">
              <Skeleton className="h-9 w-9 rounded-full bg-green-600" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
        </header>
      </div>
      <main className="mt-10 flex h-full w-full flex-col self-center rounded-3xl bg-white pt-10 shadow-xl">
        <div className="flex items-center justify-between px-10">
          <div className="flex flex-col">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="mt-2 h-4 w-28" />
          </div>
          <div className="flex gap-5">
            <div className="group relative w-full max-w-xs rounded-xl bg-white">
              <Search className="text-muted-foreground absolute top-4.5 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                type="text"
                disabled
                placeholder="Filtrar por nome"
                className="pl-10 opacity-50"
              />
            </div>
            <Skeleton className="h-10 w-36 rounded-md" />
          </div>
        </div>

        <Table className="mt-6">
          <TableHeader>
            <TableRow>
              <TableHead className="pl-10">Nome do cliente</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Endereço</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 7 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell className="pl-10">
                  <Skeleton className="h-8 w-40" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-28" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-40" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-44" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-10 w-20 rounded-sm" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Separator />
        <div className="mx-10 mt-auto flex w-full items-center justify-between pb-5">
          <Skeleton className="h-4 w-60" />
          <Skeleton className="mr-20 h-8 w-40 rounded-md" />
        </div>
      </main>
    </>
  );
}
