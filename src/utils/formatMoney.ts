export const formatMoney = (number: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

export const formatMoneyGreaterThan1000 = (number: number) => {
  return number >= 1000
    ? `${(number / 1000).toFixed(1)}K`
    : formatMoney(number);
};
