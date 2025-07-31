import postgres from "postgres";
import { UserBalance } from "../../lib/definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await sql<UserBalance[]>`
      SELECT
        id,
        current_balance
      FROM user_balance
      ORDER BY date DESC
      LIMIT 1
    `;

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}
