export type Jogo = {
  desenvolvedora: string;
  dataLancamento: string;
  plataforma: string;
};

export type ItemEletronico = {
  fabricante: string;
  tipo: string;
};

export type Genero = {
  nome: string;
};

export type Produto = {
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  jogo: Jogo | null;
  ItemEletronico: ItemEletronico | null;
  generos?: Genero[];
  pedidos: string[];
};

export enum Status {
  CANCELED = "CANCELED",
  SHIPPING = "SHIPPING",
  DELIVERED = "DELIVERED",
}

export type Cliente = {
  cpf: string;
  telefone: string;
  nome: string;
  email: string;
  rua: string;
  cidade: string;
  numeroCasa: number;
};

export type ProdutoPedido = {
  id: string;
  quantidade: number;
  subTotal: number;
  produto: Produto;
};

export type Pedido = {
  cliente: Cliente;
  produtos: ProdutoPedido[];
  id: string;
  valorTotal: number;
  status: Status;
  data: string;
};
