import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

const GAS_URL = process.env.JOBS_GAS_URL!;

export async function GET() {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  if (!GAS_URL) return NextResponse.json([], { status: 200 });

  const res = await fetch(GAS_URL, { cache: 'no-store' });
  if (!res.ok) return NextResponse.json([], { status: 200 });

  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();

  if (!GAS_URL) return NextResponse.json({ error: 'GAS not configured' }, { status: 503 });

  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'createJob', ...body }),
  });

  if (!res.ok) return NextResponse.json({ error: 'GAS error' }, { status: 502 });

  const job = await res.json();
  return NextResponse.json(job, { status: 201 });
}
