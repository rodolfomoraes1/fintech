export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type UserInfo = {
  id: string;
  name: string;
  email: string;
};

export type UserBalance = {
  id: string;
  current_balance: number;
  date: string;
};

export type PersonalInvoice = {
  id: string;
  receiver_name: string;
  amount: number;
  date: string;
  type: "deposito" | "transferencia" | "pagamento";
};
