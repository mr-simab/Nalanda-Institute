'use client';

import { Users, Award, Calendar, TrendingUp, BookOpen } from '../../../components/Icons';

export default function FacultyDashboardPage() {
  const stats = [
    { name: 'My Students', value: '156', change: '+5', icon: Users, color: 'bg-blue-500' },
    { name: 'Classes Today', value: '4', change: '', icon: BookOpen, color: 'bg-green-500' },
    { name: 'Attendance Rate', value: '87%', change: '+2%', icon: Calendar, color: 'bg-yellow-500' },
    { name: 'Avg. Performance', value: '78%', change: '+4%', icon: Award, color: 'bg-purple-500' },
  ];

  const todaySchedule = [
    { id: 1, subject: 'Data Structures', time: '09:00 AM - 10:30 AM', class: 'CSE - Sem 5', room: 'Room 101' },
    { id: 2, subject: 'Algorithms', time: '11:00 AM - 12:30 PM', class: 'CSE - Sem 5', room: 'Room 102' },
    { id: 3, subject: 'Database Systems', time: '02:00 PM - 03:30 PM', class: 'CSE - Sem 3', room: 'Lab A' },
    { id: 4, subject: 'Web Development', time: '04:00 PM - 05:30 PM', class: 'CSE - Sem 7', room: 'Lab B' },
  ];

  const pendingTasks = [
    { id: 1, task: 'Submit marks for Mid-term Exam', due: 'Tomorrow', priority: 'high' },
    { id: 2, task: 'Review student assignments', due: 'Dec 22', priority: 'medium' },
    { id: 3, task: 'Update attendance records', due: 'Dec 23', priority: 'medium' },
    { id: 4, task: 'Prepare exam question paper', due: 'Dec 24', priority: 'low' },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Faculty Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your faculty portal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                {stat.change && (
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {stat.change}
                  </div>
                )}
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.name}</div>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Today's Schedule */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Schedule</h2>
          <div className="space-y-3">
            {todaySchedule.map((classItem) => (
              <div key={classItem.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{classItem.subject}</p>
                  <p className="text-xs text-gray-500">{classItem.class}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">{classItem.time}</p>
                  <p className="text-xs text-gray-500">{classItem.room}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Tasks</h2>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <div key={task.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div
                  className={`w-3 h-3 rounded-full ${
                    task.priority === 'high'
                      ? 'bg-red-500'
                      : task.priority === 'medium'
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{task.task}</p>
                  <p className="text-xs text-gray-500">Due: {task.due}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.priority === 'high'
                    ? 'bg-red-100 text-red-700'
                    : task.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {task.priority}
                </span>
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
            <Calendar className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Mark Attendance</span>
          </button>
          <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors text-center">
            <Award className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Enter Marks</span>
          </button>
          <button className="bg-yellow-600 text-white p-4 rounded-lg hover:bg-yellow-700 transition-colors text-center">
            <Users className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">View Students</span>
          </button>
          <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors text-center">
            <BookOpen className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">My Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
}
