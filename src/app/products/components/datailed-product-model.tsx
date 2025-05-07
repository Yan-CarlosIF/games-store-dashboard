import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Produto } from "@/types/schema";
import { Ellipsis } from "lucide-react";

interface DetailedProductModalProps {
  product: Produto;
}

export default function DetailedProductModal({
  product,
}: DetailedProductModalProps) {
  const { jogo, ItemEletronico } = product;

  const renderGame = () => {
    if (jogo) {
      return (
        <>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Desenvolvedora:</span>{" "}
            {jogo.desenvolvedora}
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Plataforma:</span> {jogo.plataforma}
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Data de lancamento:</span>{" "}
            {jogo.dataLancamento.toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Generos:</span>{" "}
            {jogo.generos.map((genero) => genero.nome).join(", ")}
          </p>
        </>
      );
    }
  };

  const renderEletronicItem = () => {
    if (ItemEletronico) {
      return (
        <>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Fabricante:</span>{" "}
            {ItemEletronico.fabricante}
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Tipo:</span> {ItemEletronico.tipo}
          </p>
        </>
      );
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="cursor-pointer bg-transparent">
          <Ellipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 space-y-2 rounded-2xl bg-white p-4 shadow-lg">
        <h3 className="text-black-200 text-lg leading-5 font-semibold">
          Descrição
        </h3>
        <p className="mb-4 text-sm text-gray-700">{product.descricao}</p>

        {jogo ? renderGame() : renderEletronicItem()}
      </PopoverContent>
    </Popover>
  );
}
