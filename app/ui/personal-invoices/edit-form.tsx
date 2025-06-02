"use client";

import { PersonalInvoice } from "@/app/lib/definitions";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/ui/components/button";
import { updatePersonalInvoice, NewState } from "@/app/lib/actions";
import { useActionState } from "react";

export default function EditInvoiceForm({
  personalInvoice,
}: {
  personalInvoice: PersonalInvoice;
}) {
  const initialState: NewState = { message: null, errors: {} };
  const updateInvoiceWithId = updatePersonalInvoice.bind(
    null,
    personalInvoice.id
  );
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Destinatário
          </label>
          <div className="relative">
            <input
              id="receiver_name"
              name="receiver_name"
              type="text"
              defaultValue={personalInvoice.receiver_name}
              placeholder="Digite o destinatário"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Digite a quantia
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                defaultValue={personalInvoice.amount}
                placeholder="Digite a quantia"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Selecione o tipo de operação
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="deposito"
                  name="status"
                  type="radio"
                  value="deposito"
                  defaultChecked={personalInvoice.type === "deposito"}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="deposito"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  deposito
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="transferencia"
                  name="status"
                  type="radio"
                  value="transferencia"
                  defaultChecked={personalInvoice.type === "transferencia"}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="transferencia"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-yellow-500 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  transferencia
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="pagamento"
                  name="type"
                  type="radio"
                  value="pagamento"
                  defaultChecked={personalInvoice.type === "pagamento"}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pagamento"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  pagamento
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/personal-invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Editar Transação</Button>
      </div>
    </form>
  );
}
