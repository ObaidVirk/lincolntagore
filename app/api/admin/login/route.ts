import { NextRequest, NextResponse } from "next/server";

type LoginPayload = {
  email?: unknown;
  password?: unknown;
};

export async function POST(request: NextRequest) {
  let payload: LoginPayload;

  try {
    payload = (await request.json()) as LoginPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return NextResponse.json({ error: "Admin authentication is not configured." }, { status: 500 });
  }

  if (payload.email !== adminEmail || payload.password !== adminPassword) {
    return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true });
}
