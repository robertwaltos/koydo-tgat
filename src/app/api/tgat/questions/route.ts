import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Auth-gated question fetch from Supabase
  return NextResponse.json({
    examId: "EXAM080",
    questions: [],
    dailyLimit: 10,
    remaining: 10,
  });
}
