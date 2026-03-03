'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserRole } from '../lib/auth';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: ('admin' | 'faculty' | 'student')[];
}

export default function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const userRole = getUserRole();
    if (userRole && allowedRoles.includes(userRole as any)) {
      setAuthorized(true);
    } else {
      router.push('/login');
    }
    setLoading(false);
  }, [allowedRoles, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!authorized) {
    return null;
  }

  return <>{children}</>;
}
