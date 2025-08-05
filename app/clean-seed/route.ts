import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
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
      cleanDatabase(),
    ]);

    return Response.json({ message: "Database limpo com sucesso" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}