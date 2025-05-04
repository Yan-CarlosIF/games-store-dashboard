enum Status {
  CANCELED,
  SHIPPING,
  DELIVERED,
}

type Cliente = {
  cpf: string;
  telefone: string;
  nome: string;
  email: string;
  rua: string;
  cidade: string;
  numeroCasa: number;
};

type Produto = {
  id: string;
  quantidade: number;
  subTotal: number;
  idPedido: string;
  idProduto: string;
};

type Order = {
  cliente: Cliente;
  produtos: Produto[];
  id: string;
  valorTotal: number;
  status: Status;
  data: Date;
  cpfCliente: string;
};
