import postgres from "postgres";
import { UserInfo } from "../../lib/definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await sql<UserInfo[]>`
      SELECT
        users.id,
        users.name,
        users.email
      FROM users
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
