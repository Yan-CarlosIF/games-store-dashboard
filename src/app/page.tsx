import DatePicker from "./components/date-picker";

export default function Home() {
  return (
    <main className="flex w-full flex-col px-12 py-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-black-200 text-3xl font-semibold">Dashboard</h1>
          <span className="text-xs text-gray-400">
            Seja bem vindo ao Dashboard da loja
          </span>
        </div>
        <DatePicker />
      </div>
    </main>
  );
}
