import {
  ArrowUp,
  UserRoundCheck,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ClientsHeader() {
  return (
    <header className="mt-5 flex h-[125px] w-fit items-center justify-center rounded-4xl bg-white px-10 py-8 shadow-md">
      <div className="flex gap-5">
        <div className="flex size-18 items-center justify-center rounded-full bg-green-100">
          <UsersRound size={36} className="ml-0.5 text-green-600" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#ACACAC]">Total de clientes</p>
          <h1 className="text-black-200 text-2xl font-semibold">5,402</h1>
          <span className="flex items-center gap-0.5 text-xs">
            <ArrowUp size={18} className="text-green-500" />
            <strong className="mr-1 text-green-500">16%</strong> esse mês
          </span>
        </div>
      </div>
      <Separator
        color="#F0F0F0"
        className="mx-14 !h-22 rounded-full"
        orientation="vertical"
      />
      <div className="flex gap-5">
        <div className="flex size-18 items-center justify-center rounded-full bg-green-100">
          <UserRoundCheck size={36} className="ml-1.5 text-green-600" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#ACACAC]">Clientes ativos</p>
          <h1 className="text-black-200 text-2xl font-semibold">1,567</h1>
          <span className="flex items-center gap-0.5 text-xs">
            <ArrowUp size={18} className="rotate-180 text-red-500" />
            <strong className="mr-1 text-red-500">16%</strong> esse mês
          </span>
        </div>
      </div>
      <Separator
        color="#F0F0F0"
        className="mx-14 !h-22 rounded-full"
        orientation="vertical"
      />
      <div className="flex gap-5">
        <div className="flex size-18 items-center justify-center rounded-full bg-green-100">
          <UserRoundPlus size={36} className="ml-1.5 text-green-600" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#ACACAC]">Adicionar Cliente</p>
          <Button className="text-md my-auto h-3/6 cursor-pointer rounded-lg bg-green-600 font-semibold ease-in hover:bg-green-500">
            Adicionar
          </Button>
        </div>
      </div>
    </header>
  );
}
