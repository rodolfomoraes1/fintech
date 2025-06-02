import bcrypt from "bcryptjs";
import postgres from "postgres";
import { users, personalInvoices, userBalance } from "../lib/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedUserBalance() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS user_balance (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      current_balance INT NOT NULL,
      date DATE NOT NULL
    );
  `;

  const userBalances = await Promise.all(
    userBalance.map(
      (balance) => sql`
        INSERT INTO user_balance (id, current_balance, date)
        VALUES (${balance.id}, ${balance.current_balance}, ${balance.date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return userBalances;
}

async function seedPersonalInvoices() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS personal_invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      receiver_name VARCHAR(255) NOT NULL,
      amount INT NOT NULL,
      date DATE NOT NULL,
      type VARCHAR(255) NOT NULL
    );
  `;

  const insertedPersonalInvoices = await Promise.all(
    personalInvoices.map(
      (personalInvoice) => sql`
        INSERT INTO personal_invoices (receiver_name, amount, date, type)
        VALUES (${personalInvoice.receiver_name}, ${personalInvoice.amount}, ${personalInvoice.date}, ${personalInvoice.type})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedPersonalInvoices;
}

async function cleanDatabase() {
  try {
    await sql`DROP TABLE IF EXISTS personal_invoices`;
    await sql`DROP TABLE IF EXISTS user_balance`;
    await sql`DROP TABLE IF EXISTS users`;

    console.log("Database cleaned successfully");
  } catch (error) {
    console.error("Error cleaning database:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      //cleanDatabase(),
      seedUsers(),
      seedUserBalance(),
      seedPersonalInvoices(),
    ]);

    return Response.json({ message: "Database povoado com sucesso" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
