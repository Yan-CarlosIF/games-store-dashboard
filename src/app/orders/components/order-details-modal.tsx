import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { ChevronDown, Ellipsis, UserRound } from "lucide-react";
import { Pedido } from "@/types/schema";

type OrderDetailsModalProps = {
  order: Pedido;
};

export default function OrderDetailsModal({ order }: OrderDetailsModalProps) {
  const productsQuantity = order.produtosPedido.length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-9 cursor-pointer transition-colors ease-in-out hover:bg-gray-300/30"
        >
          <Ellipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-fit flex-col">
        <h1 className="text-black-200 flex items-center gap-1 self-center font-semibold">
          Cliente
          <UserRound className="mb-0.5" size={14} />
        </h1>
        <div className="space-y-1">
          <p className="text-black-200 my-2 text-sm">
            <span className="font-semibold">Nome:</span> {order.cliente.nome}
          </p>
          <p className="text-black-200 text-sm text-nowrap">
            <span className="font-semibold text-nowrap">Endereço:</span>{" "}
            {order.cliente.cidade} - {order.cliente.rua},{" "}
            {order.cliente.numeroCasa}
          </p>
        </div>
        <h1 className="text-black-200 mt-2 flex items-center gap-1 self-center font-semibold">
          {productsQuantity == 1 ? "Produto" : "Produtos"}
          <ChevronDown size={14} />
        </h1>
        <ul className="space-y-3 self-center py-1">
          {order.produtosPedido.map((product) => (
            <li className="text-black-200 list-disc text-sm" key={product.id}>
              {product.produto.nome}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
