'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Users,
  BookOpen,
  FileText,
  DollarSign,
  Calendar,
  Award,
  ImageIcon,
  Settings,
  LogOut,
  GraduationCap,
} from './Icons';

interface SidebarProps {
  role: 'admin' | 'faculty' | 'student';
}

const Sidebar = ({ role }: SidebarProps) => {
  const pathname = usePathname();

  const adminMenu = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Students', href: '/admin/students', icon: Users },
    { name: 'Faculty', href: '/admin/faculty', icon: GraduationCap },
    { name: 'Admissions', href: '/admin/admissions', icon: FileText },
    { name: 'Fees', href: '/admin/fees', icon: DollarSign },
    { name: 'Results', href: '/admin/results', icon: Award },
    { name: 'Attendance', href: '/admin/attendance', icon: Calendar },
    { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const facultyMenu = [
    { name: 'Dashboard', href: '/faculty-panel', icon: Home },
    { name: 'My Students', href: '/faculty-panel/students', icon: Users },
    { name: 'Results', href: '/faculty-panel/results', icon: Award },
    { name: 'Attendance', href: '/faculty-panel/attendance', icon: Calendar },
    { name: 'Profile', href: '/faculty-panel/profile', icon: Settings },
  ];

  const studentMenu = [
    { name: 'Dashboard', href: '/student', icon: Home },
    { name: 'Results', href: '/student/results', icon: Award },
    { name: 'Attendance', href: '/student/attendance', icon: Calendar },
    { name: 'Fees', href: '/student/fees', icon: DollarSign },
    { name: 'Profile', href: '/student/profile', icon: Settings },
  ];

  const menu = role === 'admin' ? adminMenu : role === 'faculty' ? facultyMenu : studentMenu;

  return (
    <div className="w-64 bg-gray-900 min-h-screen flex flex-col">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary-400" />
          <span className="text-xl font-bold text-white">Nalanda Institute</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menu.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center space-x-3 w-full px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
