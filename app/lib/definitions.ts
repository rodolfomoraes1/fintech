interface BaseUser {
  id: string;
  name: string;
  email: string;
}

export interface User extends BaseUser {
  password: string;
}

export interface UserInfo extends BaseUser {}

export type UserBalance = {
  id: string;
  current_balance: number;
  date: string;
};

export type InvoiceType = "deposito" | "transferencia" | "pagamento";

export type PersonalInvoice = {
  id: string;
  receiver_name: string;
  amount: number;
  date: string;
  type: InvoiceType;
};
