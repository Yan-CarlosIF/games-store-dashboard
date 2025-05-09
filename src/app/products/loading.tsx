import { ArrowUpDown } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsPageLoading() {
  return (
    <>
      <h1 className="text-black-200 text-3xl font-semibold">Produtos</h1>
      <nav className="mt-10 flex h-full flex-col rounded-2xl bg-white py-6 shadow-lg">
        <div className="mx-10 flex items-center justify-between">
          <h1 className="text-black-200 font-barlow text-3xl font-bold">
            Tabela de Produtos
          </h1>
          <Skeleton className="h-10 w-40" />
        </div>

        <header className="mt-10 text-sm text-gray-400">
          <nav className="flex w-full bg-gray-200/20 px-14 font-bold">
            <div className="w-[21%] py-2.5 pl-20 text-left text-sm">
              <div>Nome</div>
            </div>
            <div className="flex w-[15%] items-center justify-center gap-5 text-xs">
              <ArrowUpDown size={16} />
              <span>Vendas</span>
            </div>
            <div className="flex w-[15%] items-center justify-center gap-5 text-xs">
              <ArrowUpDown size={16} />
              <span>Qtd.</span>
            </div>
            <div className="flex w-[15%] items-center justify-center gap-5 text-xs">
              <ArrowUpDown size={16} />
              <span>Preço</span>
            </div>
            <div className="flex w-[20%] items-center justify-center gap-5 pr-5 text-xs">
              <ArrowUpDown size={16} />
              <span>Tipo</span>
            </div>
          </nav>
        </header>

        <div className="mt-8 flex flex-col gap-4 px-14">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border bg-gray-200/25 p-4"
            >
              <Skeleton className="h-8 w-[23%]" />
              <Skeleton className="h-8 w-[14.5%]" />
              <Skeleton className="h-8 w-[14.5%]" />
              <Skeleton className="h-8 w-[15%]" />
              <Skeleton className="h-8 w-[20%]" />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between px-10">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-8 w-40" />
        </div>
      </nav>
    </>
  );
}
