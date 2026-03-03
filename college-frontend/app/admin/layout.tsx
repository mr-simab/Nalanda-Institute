'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../../components/ProtectedRoute';
import RoleGuard from '../../components/RoleGuard';
import Sidebar from '../../components/Sidebar';
import { getUserRole } from '../../lib/auth';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const role = getUserRole();
    if (role !== 'admin') {
      router.push('/login');
    }
    setUserRole(role);
  }, [router]);

  if (!userRole || userRole !== 'admin') {
    return null;
  }

  return (
    <ProtectedRoute>
      <RoleGuard allowedRoles={['admin']}>
        <div className="flex">
          <Sidebar role="admin" />
          <div className="flex-1 bg-gray-50 min-h-screen">
            <div className="p-8">{children}</div>
          </div>
        </div>
      </RoleGuard>
    </ProtectedRoute>
  );
}
