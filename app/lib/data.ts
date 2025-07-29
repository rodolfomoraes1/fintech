import postgres from "postgres";
import { PersonalInvoice, User, UserBalance } from "./definitions";
import { formatCurrency } from "./utils";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchUserInfo() {
  try {
    const data = await sql<User[]>`
      SELECT
        users.id,
        users.name,
        users.email
      FROM users
    `;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchUserBalance() {
  try {
    const data = await sql<UserBalance[]>`
      SELECT
        id,
        current_balance,
        date
      FROM user_balance
      ORDER BY date DESC
      LIMIT 1
    `;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchLatestPersonalInvoices() {
  try {
    const data = await sql<PersonalInvoice[]>`
      SELECT
        personal_invoices.id,
        personal_invoices.receiver_name,
        personal_invoices.amount,
        personal_invoices.type,
        personal_invoices.date
      FROM personal_invoices
      ORDER BY personal_invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchPersonalInvoices() {
  try {
    const personalInvoices = await sql<PersonalInvoice[]>`
      SELECT
        personal_invoices.id,
        personal_invoices.receiver_name,
        personal_invoices.amount,
        personal_invoices.date
      FROM personal_invoices
      ORDER BY personal_invoices.date DESC
    `;

    return personalInvoices;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch personal invoices.");
  }
}

export async function fetchFilteredPersonalInvoices(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const personalInvoices = await sql<PersonalInvoice[]>`
      SELECT
        personal_invoices.id,
        personal_invoices.receiver_name,
        personal_invoices.amount,
        personal_invoices.date,
        personal_invoices.type
      FROM personal_invoices
      WHERE
        personal_invoices.receiver_name ILIKE ${`%${query}%`} OR
        personal_invoices.amount::text ILIKE ${`%${query}%`} OR
        personal_invoices.type::text ILIKE ${`%${query}%`} OR
        personal_invoices.date::text ILIKE ${`%${query}%`}
      ORDER BY personal_invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return personalInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}

export async function fetchPersonalInvoicesPages(query: string) {
  try {
    const data = await sql`SELECT COUNT(*)
    FROM personal_invoices
    WHERE
      personal_invoices.receiver_name ILIKE ${`%${query}%`} OR
      personal_invoices.amount::text ILIKE ${`%${query}%`} OR
      personal_invoices.date::text ILIKE ${`%${query}%`} OR
      personal_invoices.type ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}

export async function fetchPersonalInvoiceById(id: string) {
  try {
    const data = await sql<PersonalInvoice[]>`
      SELECT
        personal_invoices.id,
        personal_invoices.receiver_name,
        personal_invoices.amount,
        personal_invoices.type
      FROM personal_invoices
      WHERE personal_invoices.id = ${id};
    `;

    const personalInvoice = data.map((personalInvoice) => ({
      ...personalInvoice,
      amount: personalInvoice.amount / 100,
    }));

    return personalInvoice[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}

export async function fetchLatestPersonalInvoicesByMonth() {
  try {
    const latestMonthResult = await sql<{ month: string }[]>`
      SELECT TO_CHAR(MAX(date), 'YYYY-MM') as month
      FROM personal_invoices
    `;
    const latestMonth = latestMonthResult[0]?.month;

    if (!latestMonth) {
      return [];
    }

    const data = await sql<PersonalInvoice[]>`
      SELECT
        personal_invoices.id,
        personal_invoices.receiver_name,
        personal_invoices.amount,
        personal_invoices.type,
        personal_invoices.date
      FROM personal_invoices
      WHERE TO_CHAR(personal_invoices.date, 'YYYY-MM') = ${latestMonth}
      ORDER BY personal_invoices.date DESC
    `;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices by latest month.");
  }
}