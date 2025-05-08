import { Produto } from "@/types/schema";
import { formatMoney } from "@/utils/formatMoney";

import DetailedProductModal from "./datailed-product-model";

interface ProductCartProps {
  product: Produto;
}

export default function ProductCard({ product }: ProductCartProps) {
  return (
    <tr className="rounded-lg border bg-gray-200/25 p-4 pl-12">
      <td className="w-[23%]">
        <div className="flex flex-col gap-1">
          <h1 className="text-sm">{product.nome}</h1>
          <span className="text-xs text-gray-500">
            {product.jogo
              ? product.jogo.desenvolvedora
              : product.ItemEletronico?.fabricante}
          </span>
        </div>
      </td>
      <td className="w-[14.5%]">
        <div className="flex flex-col gap-1">
          <h1 className="text-sm">{product.pedidos.length}</h1>
          <span className="text-xs text-gray-500">Vendas</span>
        </div>
      </td>
      <td className="w-[14.5%]">
        <div className="flex flex-col gap-1">
          <h1 className="text-sm">{product.estoque}</h1>
          <span className="text-xs text-gray-500">Unidades</span>
        </div>
      </td>
      <td className="w-[15%]">
        <div className="flex flex-col gap-1">
          <h1 className="text-sm">{formatMoney(product.preco)}</h1>
          <span className="text-xs text-gray-500">Preço</span>
        </div>
      </td>
      <td className="w-[12.5%]">
        <div className="flex items-center gap-4">
          <div className="flex w-24 items-center justify-center rounded-sm bg-gray-300/30 px-2 py-2.5 text-xs font-semibold text-gray-600/80">
            {product.jogo ? "Jogo" : "Eletrônico"}
          </div>
          <DetailedProductModal product={product} />
        </div>
      </td>
    </tr>
  );
}
