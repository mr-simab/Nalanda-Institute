'use client';

import { Users, GraduationCap, DollarSign, FileText, TrendingUp, Award, Calendar } from '../../../components/Icons';

export default function AdminDashboardPage() {
  const stats = [
    { name: 'Total Students', value: '5,234', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { name: 'Total Faculty', value: '234', change: '+5%', icon: GraduationCap, color: 'bg-green-500' },
    { name: 'Pending Admissions', value: '156', change: '+8%', icon: FileText, color: 'bg-yellow-500' },
    { name: 'Fee Collection', value: '$2.4M', change: '+15%', icon: DollarSign, color: 'bg-purple-500' },
    { name: 'Average Attendance', value: '85%', change: '+3%', icon: Calendar, color: 'bg-pink-500' },
    { name: 'Pass Rate', value: '92%', change: '+2%', icon: Award, color: 'bg-indigo-500' },
  ];

  const recentActivities = [
    { id: 1, action: 'New admission application received', user: 'Rahul Sharma', time: '2 hours ago', type: 'admission' },
    { id: 2, action: 'Fee payment completed', user: 'Priya Patel', time: '3 hours ago', type: 'fee' },
    { id: 3, action: 'Result published for Semester 5', user: 'Dr. Anjali Kumar', time: '5 hours ago', type: 'result' },
    { id: 4, action: 'New faculty joined', user: 'Dr. Vikram Singh', time: '1 day ago', type: 'faculty' },
    { id: 5, action: 'Gallery updated with event photos', user: 'Admin', time: '2 days ago', type: 'system' },
  ];

  const upcomingEvents = [
    { id: 1, name: 'Faculty Meeting', date: 'Dec 20, 2024', time: '10:00 AM', type: 'meeting' },
    { id: 2, name: 'Semester Exams Start', date: 'Dec 25, 2024', time: '9:00 AM', type: 'exam' },
    { id: 3, name: 'Annual Day Preparation', date: 'Dec 28, 2024', time: '2:00 PM', type: 'event' },
    { id: 4, name: 'Review Committee Meeting', date: 'Jan 2, 2025', time: '11:00 AM', type: 'meeting' },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.name}</div>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-primary-100 p-2 rounded-full">
                  <Users className="h-4 w-4 text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.user}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-primary-600 text-white text-center rounded-lg p-3 min-w-[60px]">
                  <div className="text-xs font-medium">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                  <div className="text-lg font-bold">{new Date(event.date).getDate()}</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{event.name}</p>
                  <p className="text-xs text-gray-500">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-primary-600 text-white p-4 rounded-lg hover:bg-primary-700 transition-colors text-center">
            <Users className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Add Student</span>
          </button>
          <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors text-center">
            <GraduationCap className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Add Faculty</span>
          </button>
          <button className="bg-yellow-600 text-white p-4 rounded-lg hover:bg-yellow-700 transition-colors text-center">
            <FileText className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Review Admissions</span>
          </button>
          <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors text-center">
            <DollarSign className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Manage Fees</span>
          </button>
        </div>
      </div>
    </div>
  );
}
