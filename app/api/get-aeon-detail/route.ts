import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`SELECT * FROM aeon_detail`;

    const aeon_detail = result.rows;

    return NextResponse.json({ aeon_detail }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
