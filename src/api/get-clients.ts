import { api } from "@/lib/axios";
import { Cliente } from "@/types/schema";

export async function getClients() {
  const clients = (await api.get<Cliente[]>("/client/get")).data;

  return clients;
}
