import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Fetch data from the database
    const result = await sql`SELECT * FROM aeons`;

    // Extract rows from the result
    const aeons = result.rows;

    // Return the fetched data
    return NextResponse.json({ aeons }, { status: 200 });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error }, { status: 500 });
  }
}
