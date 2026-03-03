'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../../components/ProtectedRoute';
import RoleGuard from '../../components/RoleGuard';
import Sidebar from '../../components/Sidebar';
import { getUserRole } from '../../lib/auth';

export default function FacultyLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const role = getUserRole();
    if (role !== 'faculty') {
      router.push('/login');
    }
    setUserRole(role);
  }, [router]);

  if (!userRole || userRole !== 'faculty') {
    return null;
  }

  return (
    <ProtectedRoute>
      <RoleGuard allowedRoles={['faculty']}>
        <div className="flex">
          <Sidebar role="faculty" />
          <div className="flex-1 bg-gray-50 min-h-screen">
            <div className="p-8">{children}</div>
          </div>
        </div>
      </RoleGuard>
    </ProtectedRoute>
  );
}
