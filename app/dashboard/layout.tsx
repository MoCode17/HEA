import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import SignOutButton from './SignOutButton';

export const metadata = { title: 'Dashboard | HEA' };

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  if (!session) redirect('/dashboard/login');

  return (
    <div className="min-h-screen bg-[#181818]">
      {/* Top nav */}
      <nav className="bg-[#202020] border-b border-[#2e2e2e] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/dashboard">
            <img src="/Logo_transparent.png" alt="HEA" className="h-9 w-auto" />
          </Link>
          <Link
            href="/dashboard"
            className="text-[#d6d6d6] hover:text-[#ffd100] text-sm font-medium transition-colors"
          >
            Jobs
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#555] text-sm hidden sm:block">
            {session.user?.email}
          </span>
          <SignOutButton />
        </div>
      </nav>

      <main className="p-6">{children}</main>
    </div>
  );
}
