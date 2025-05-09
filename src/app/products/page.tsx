import { ArrowUpDown } from "lucide-react";

import { getProducts } from "@/api/get-products";

import SortButton from "../components/sort-button";
import ProductsPagination from "./components/pagination";
import ProductCard from "./components/product-card";

const filterOptions = [
  {
    value: "mais-vendidos",
    label: "Mais Vendidos",
  },
  {
    value: "menos-vendidos",
    label: "Menos Vendidos",
  },
  {
    value: "jogo",
    label: "Jogo",
  },
  {
    value: "eletronico",
    label: "Item Eletrônico",
  },
];

type Keys = "offset" | "sort";

type SearchParams = Promise<{ [k in Keys]: string | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const products = await getProducts();

  const sParams = await searchParams;

  const offset = sParams.offset ? parseInt(sParams.offset) : 0;

  const sort = sParams.sort;

  let filteredProducts = products;

  if (sort === "mais-vendidos") {
    filteredProducts.sort((a, b) => b.pedidos.length - a.pedidos.length);
  } else if (sort === "menos-vendidos") {
    filteredProducts.sort((a, b) => a.pedidos.length - b.pedidos.length);
  } else if (sort === "jogo") {
    filteredProducts = filteredProducts.filter((product) => product.jogo);
  } else if (sort === "eletronico") {
    filteredProducts = filteredProducts.filter(
      (product) => product.jogo === null,
    );
  }

  const firstSixProducts = sort
    ? filteredProducts.slice(offset, offset + 6)
    : products.slice(offset, offset + 6);

  const productsLength = sort ? filteredProducts.length : products.length;

  return (
    <>
      <h1 className="text-black-200 text-3xl font-semibold">Produtos</h1>
      <nav className="mt-10 flex h-full flex-col rounded-2xl bg-white py-6 shadow-lg">
        <div className="mx-10 flex items-center justify-between">
          <h1 className="text-black-200 font-barlow text-3xl font-bold">
            Tabela de Produtos
          </h1>
          <SortButton options={filterOptions} />
        </div>
        <table className="mt-8 h-full w-full">
          <thead className="text-sm text-gray-400">
            <tr className="flex w-full bg-gray-200/20 px-14">
              <th className="w-[21%] py-2.5 pl-20 text-left text-sm">
                <div>Nome</div>
              </th>
              <th className="flex w-[15%] items-center justify-center gap-5 text-xs">
                <ArrowUpDown size={16} />
                <span>Vendas</span>
              </th>
              <th className="flex w-[15%] items-center justify-center gap-5 text-xs">
                <ArrowUpDown size={16} />
                <span>Qtd.</span>
              </th>
              <th className="flex w-[15%] items-center justify-center gap-5 text-xs">
                <ArrowUpDown size={16} />
                <span>Preço</span>
              </th>
              <th className="flex w-[20%] items-center justify-center gap-5 pr-5 text-xs">
                <ArrowUpDown size={16} />
                <span>Tipo</span>
              </th>
            </tr>
          </thead>
          <tbody className="m-8 flex flex-col gap-3">
            {firstSixProducts.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="flex items-center justify-between px-10">
                <span className="text-sm text-gray-400">
                  Mostrando {offset + 1} a{" "}
                  {offset + 6 > productsLength ? productsLength : offset + 6} de{" "}
                  {filteredProducts.length} produtos
                </span>
                <ProductsPagination limit={Math.ceil(productsLength / 6)} />
              </td>
            </tr>
          </tfoot>
        </table>
      </nav>
    </>
  );
}
