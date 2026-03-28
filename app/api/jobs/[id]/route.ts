import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

const GAS_URL = process.env.JOBS_GAS_URL!;

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  if (!GAS_URL) return NextResponse.json(null, { status: 404 });

  const res = await fetch(`${GAS_URL}?id=${encodeURIComponent(id)}`, { cache: 'no-store' });
  if (!res.ok) return NextResponse.json(null, { status: 404 });

  const data = await res.json();
  return NextResponse.json(data);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const body = await req.json();

  if (!GAS_URL) return NextResponse.json({ error: 'GAS not configured' }, { status: 503 });

  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'updateJob', jobNumber: id, ...body }),
  });

  if (!res.ok) return NextResponse.json({ error: 'GAS error' }, { status: 502 });

  const updated = await res.json();
  return NextResponse.json(updated);
}
