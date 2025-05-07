import { api } from "@/lib/axios";
import { Produto } from "@/types/schema";

interface IGetMostSelledProducts {
  limit?: number;
  dateFrom?: Date;
  dateTo?: Date;
}

export async function getMostSelledProducts({
  limit,
  dateFrom,
  dateTo,
}: IGetMostSelledProducts) {
  const mostSelledProducts = (
    await api.get<Produto[]>("/product/get-most-selled", {
      params: { limit, dateFrom, dateTo },
    })
  ).data;

  return mostSelledProducts;
}
