import { api } from "@/lib/axios";
import { Produto } from "@/types/schema";

export async function getProducts() {
  const products = (await api.get<Produto[]>("/product/get")).data;

  return products;
}
