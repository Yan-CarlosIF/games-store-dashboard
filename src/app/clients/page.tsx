import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUp,
  Search,
  UserRoundCheck,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";

export default function Clients() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-black-200 text-3xl font-bold">Clientes</h1>
        <div className="group relative w-full max-w-xs rounded-xl bg-white">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 duration-200 ease-in-out group-focus-within:text-green-500" />
          <Input
            type="text"
            placeholder="Filtrar por nome"
            className="pl-10 focus-visible:border-green-500 focus-visible:ring-green-200"
          />
        </div>
      </div>
      <header className="mt-10 flex h-[151px] w-fit items-center justify-center self-center rounded-4xl bg-white px-10">
        <div className="flex gap-5">
          <div className="flex size-22 items-center justify-center rounded-full bg-green-100">
            <UsersRound size={44} className="text-green-600" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#ACACAC]">Total de clientes</p>
            <h1 className="text-black-200 text-3xl font-semibold">5,402</h1>
            <span className="flex items-center gap-0.5 text-sm">
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
          <div className="flex size-22 items-center justify-center rounded-full bg-green-100">
            <UserRoundCheck size={44} className="ml-2 text-green-600" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#ACACAC]">Clientes ativos</p>
            <h1 className="text-black-200 text-3xl font-semibold">1,567</h1>
            <span className="flex items-center gap-0.5 text-sm">
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
          <div className="flex size-22 items-center justify-center rounded-full bg-green-100">
            <UserRoundPlus size={44} className="ml-2 text-green-600" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#ACACAC]">Adicionar Cliente</p>
            <Button className="text-md my-auto h-2/5 cursor-pointer rounded-lg bg-green-600 font-semibold ease-in hover:bg-green-500">
              Adicionar
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
