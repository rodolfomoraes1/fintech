const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "José da Silva",
    email: "user@email.com",
    password: "123456",
  },
];

const userBalance = [
  {
    id: "41052222-9999-4271-9855-fec4b6a6442a",
    current_balance: 1200000,
    date: "2024-06-01",
  },
  {
    id: "41054333-9999-4271-9855-fec4b6a6442a",
    current_balance: 1000000,
    date: "2024-06-03",
  },
  {
    id: "410544b2-9999-4271-9855-fec4b6a6442a",
    current_balance: 1000000,
    date: "2024-06-02",
  },
];

const personalInvoices = [
  {
    receiver_name: "Amazon Online Store",
    amount: 15795,
    date: "2022-12-06",
    type: "pagamento",
  },
  {
    receiver_name: "Netflix Subscription",
    amount: 4590,
    date: "2022-12-01",
    type: "pagamento",
  },
  {
    receiver_name: "Spotify Premium",
    amount: 1690,
    date: "2022-12-05",
    type: "pagamento",
  },
  {
    receiver_name: "Starbucks Coffee",
    amount: 1250,
    date: "2022-12-03",
    type: "pagamento",
  },
  {
    receiver_name: "Uber Ride",
    amount: 3245,
    date: "2022-11-28",
    type: "pagamento",
  },
  {
    receiver_name: "Apple App Store",
    amount: 2990,
    date: "2022-11-30",
    type: "pagamento",
  },
  {
    receiver_name: "Mercado XPTO",
    amount: 8765,
    date: "2022-12-04",
    type: "transferencia",
  },
  {
    receiver_name: "Airbnb Praia",
    amount: 24500,
    date: "2022-11-25",
    type: "transferencia",
  },
  {
    receiver_name: "Academia",
    amount: 8990,
    date: "2022-12-01",
    type: "transferencia",
  },
  {
    receiver_name: "Adobe Creative Cloud",
    amount: 5490,
    date: "2022-11-27",
    type: "pagamento",
  },
  {
    receiver_name: "Dropbox Storage",
    amount: 1190,
    date: "2022-12-02",
    type: "pagamento",
  },
  {
    receiver_name: "Zoom Pro Plan",
    amount: 1490,
    date: "2022-11-29",
    type: "pagamento",
  },
  {
    receiver_name: "PlayStation Plus",
    amount: 2490,
    date: "2022-11-26",
    type: "pagamento",
  },
  {
    receiver_name: "Salário",
    amount: 800000,
    date: "2022-11-01",
    type: "deposito",
  },
  {
    receiver_name: "Poupança",
    amount: 500000,
    date: "2022-11-12",
    type: "deposito",
  },
  {
    receiver_name: "Salário",
    amount: 800000,
    date: "2022-12-01",
    type: "deposito",
  },
  {
    receiver_name: "Transferência da Maria",
    amount: 1555,
    date: "2022-11-13",
    type: "transferencia",
  },
  {
    receiver_name: "Transferência do Severino",
    amount: 1400,
    date: "2022-11-22",
    type: "transferencia",
  },
  {
    receiver_name: "Transferência do Severino",
    amount: 1400,
    date: "2022-11-22",
    type: "transferencia",
  },
];

export { users, personalInvoices, userBalance };
