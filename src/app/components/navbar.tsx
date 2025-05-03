"use client";

import Label from "./label";

export default function Navbar() {
  return (
    <aside className="flex w-[345px] flex-col bg-white">
      <h1 className="text-black-200 mt-10 self-center text-3xl font-bold">
        Games Store<strong className="text-green-500">.</strong>
      </h1>
      <p className="mt-1 mr-10 self-center text-xs text-gray-400">
        E-Commerce Dashboard
      </p>

      <div className="mt-20 flex w-full flex-col items-center gap-2">
        <Label icon="house" url="/" content="Dashboard" />
        <Label icon="logs" url="/orders" content="Pedidos" />
        <Label icon="users" url="/clients" content="Clientes" />
      </div>
    </aside>
  );
}
