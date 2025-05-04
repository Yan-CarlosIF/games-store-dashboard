import { Brain } from "lucide-react";
import Label from "../components/label";

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
      <div className="mt-auto mb-10 flex flex-col items-center font-light">
        <p className="text-black-200/60 font-barlow text-xs font-bold">
          Game Store Admin Dashboard
        </p>

        <span className="text-black-200/90 flex items-center gap-1 text-sm">
          Made with{" "}
          <Brain size={14} className="text-red-400/50" fill="#fb2c3669" /> by{" "}
          <a
            className="text-sm font-semibold transition-colors duration-200 ease-in hover:text-red-500"
            href="https://github.com/Yan-CarlosIF"
            target="_blank"
          >
            Yan
          </a>
        </span>
      </div>
    </aside>
  );
}
