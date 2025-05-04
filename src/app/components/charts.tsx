"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Months } from "@/types/utils";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {
  Pedidos: {
    label: "Pedidos",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const colors: string[] = [
  "#b9f8cf",
  "#7bf1a8",
  "#05df72",
  "oklch(72.3% 0.219 149.579)",
  "oklch(62.7% 0.194 149.214)",
];

const pieChartConfig = {
  pedidos: {
    label: "Pedidos",
  },
  product1: {
    label: "produto 1",
    color: colors[0],
  },
  product2: {
    label: "produto2",
    color: colors[1],
  },
  product3: {
    label: "produto3",
    color: colors[3],
  },
  product4: {
    label: "produto4",
    color: colors[4],
  },
  product5: {
    label: "produto5",
    color: colors[5],
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Janeiro", Pedidos: 186 },
  { month: "Fevereiro", Pedidos: 305 },
  { month: "Março", Pedidos: 237 },
  { month: "Abril", Pedidos: 170 },
  { month: "Maio", Pedidos: 209 },
  { month: "Junho", Pedidos: 214 },
];

const pieChartData = [
  { product: "Playstation 5", pedidos: 275, fill: colors[0] },
  { product: "Red Dead Redemption 2", pedidos: 200, fill: colors[1] },
  { product: "Xbox Series X", pedidos: 287, fill: colors[2] },
  { product: "NBA 2k", pedidos: 173, fill: colors[3] },
  { product: "Dualshock 5", pedidos: 190, fill: colors[4] },
];

export default function Charts() {
  const actualMonth = new Date().getMonth();
  const sixMonthsBefore =
    actualMonth - 6 >= 0
      ? Months[actualMonth - 5]
      : Months[12 - (actualMonth - 5) * -1];
  console.log(Months[actualMonth]);

  return (
    <div className="mt-10 flex items-center gap-10">
      <Card className="h-[520px] w-1/2">
        <CardHeader>
          <CardTitle className="font-barlow text-black-200 text-2xl font-bold">
            Gráfico de Pedidos
          </CardTitle>
          <CardDescription>
            Total de pedidos nos últimos 6 meses
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[330px] w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <AreaChart
              height={300}
              accessibilityLayer
              data={chartData}
              margin={{ right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <YAxis
                dataKey="Pedidos"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent indicator="line" color="#05df72" />
                }
              />
              <defs>
                <linearGradient id="fillPedidos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#05df72" stopOpacity={0.5} />
                  <stop offset="50%" stopColor="#86efac" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#dcfce7" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <Area
                dataKey="Pedidos"
                type="natural"
                fill="url(#fillPedidos)" // <- Aqui está o ponto crucial
                stroke="#05df72"
                strokeWidth={3}
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                Crescimento de 5,2% neste mês <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground flex items-center gap-2 leading-none">
                {sixMonthsBefore} - {Months[actualMonth]}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card className="h-[520px] w-1/2">
        <CardHeader>
          <CardTitle className="font-barlow text-black-200 text-2xl font-bold">
            Produtos mais comprados
          </CardTitle>
          <CardDescription>
            Quantidade dos produtos mais comprados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={pieChartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                wrapperClassName="rounded-full shadow-md border bg-white"
                formatter={(value: number, name: string) => {
                  return [
                    <>
                      <span className="text-muted-foreground mr-2 font-medium">
                        {name}
                      </span>
                      <span className="font-semibold text-black">{value}</span>
                    </>,
                  ];
                }}
              />

              <Pie
                data={pieChartData}
                dataKey="pedidos"
                nameKey="product"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {pieChartData.reduce(
                              (total: number, pedido) => total + pedido.pedidos,
                              0,
                            )}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Pedidos
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
