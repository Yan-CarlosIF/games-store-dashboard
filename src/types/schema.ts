export type Jogo = {
  desenvolvedora: string;
  dataLancamento: Date;
  plataforma: string;
  generos: Genero[];
};

export type ItemEletronico = {
  fabricante: string;
  tipo: string;
};

export type Genero = {
  nome: String;
};

export type Produto = {
  nome: String;
  preco: number;
  descricao: String;
  estoque: number;
  jogo: Jogo | null;
  ItemEletronico: ItemEletronico | null;
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
  produtosPedido: ProdutoPedido[];
  id: string;
  valorTotal: number;
  status: Status;
  data: string;
};
