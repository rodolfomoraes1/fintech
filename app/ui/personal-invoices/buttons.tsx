import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deletePersonalInvoice } from "@/app/lib/actions";
import Link from "next/link";

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/personal-invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Criar transação</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdatePersonalInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/personal-invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeletePersonalInvoice({ id }: { id: string }) {
  const deletePersonalInvoiceWithId = deletePersonalInvoice.bind(null, id);
  return (
    <form action={deletePersonalInvoiceWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
