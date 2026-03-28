'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/dashboard/login' })}
      className="text-[#888] hover:text-white text-sm transition-colors"
    >
      Sign out
    </button>
  );
}
