import { fetchUserBalance, fetchUserInfo } from "@/app/lib/data";
import Card from "../components/card/card";
import { formatDateToLocalInSeconds, formatCurrency } from "@/app/lib/utils";

export default async function Summary() {
  const user = await fetchUserInfo();
  const balance = await fetchUserBalance();

  return (
    <Card>
      <div className="flex flex-col md:flex-row items-center gap-4 p-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold">Olá, {user[0].name} :)</h1>
        </div>

        <div className="flex-1 text-center md:text-left border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-4">
          <h2 className="text-lg font-semibold mb-2">Saldo</h2>
          <p className="text-sm  mb-1">Conta Corrente</p>
          <p className="text-2xl font-bold ">
            {formatCurrency(balance[0].current_balance)}
          </p>
          <p className="pt-4 text-xs">
            Última atualização: {formatDateToLocalInSeconds(balance[0].date)}
          </p>
        </div>
      </div>
    </Card>
  );
}
