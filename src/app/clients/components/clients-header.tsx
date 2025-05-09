import { UserRoundCheck, UsersRound } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Cliente } from "@/types/schema";

type ClientsHeaderProps = {
  clients: Cliente[];
};

export default function ClientsHeader({ clients }: ClientsHeaderProps) {
  const activeClients = clients.filter((client) => client.pedidos.length);

  return (
    <header className="mt-5 flex h-[125px] w-fit items-center justify-center rounded-4xl bg-white px-10 py-8 shadow-md">
      <div className="flex gap-5">
        <div className="flex size-18 items-center justify-center rounded-full bg-green-100">
          <UsersRound size={36} className="ml-0.5 text-green-600" />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <p className="text-sm text-[#ACACAC]">Total de clientes</p>
          <h1 className="text-black-200 font-barlow text-3xl font-bold">
            {clients.length}
          </h1>
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
        <div className="flex flex-col justify-center gap-1">
          <p className="text-sm text-[#ACACAC]">Clientes ativos</p>
          <h1 className="text-black-200 font-barlow text-3xl font-bold">
            {activeClients.length}
          </h1>
        </div>
      </div>
    </header>
  );
}
