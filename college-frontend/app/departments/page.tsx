import { Building, Users, BookOpen, ChevronRight } from '../../components/Icons';

const departments = [
  {
    id: 1,
    name: 'Computer Science & Engineering',
    code: 'CSE',
    head: 'Dr. Anjali Kumar',
    courses: 8,
    students: 450,
    description:
      'Cutting-edge curriculum in software development, AI, machine learning, and data science.',
    icon: Building,
  },
  {
    id: 2,
    name: 'Business Administration',
    code: 'BBA',
    head: 'Dr. Rahul Verma',
    courses: 6,
    students: 380,
    description:
      'Comprehensive business education focusing on leadership, management, and entrepreneurship.',
    icon: Users,
  },
  {
    id: 3,
    name: 'Electronics & Communication',
    code: 'ECE',
    head: 'Dr. Sunita Singh',
    courses: 7,
    students: 420,
    description:
      'Advanced programs in electronics, communication systems, and embedded technologies.',
    icon: BookOpen,
  },
  {
    id: 4,
    name: 'Mechanical Engineering',
    code: 'ME',
    head: 'Dr. Rajesh Gupta',
    courses: 6,
    students: 350,
    description:
      'Fundamental and applied mechanical engineering principles with practical applications.',
    icon: Building,
  },
  {
    id: 5,
    name: 'Arts & Humanities',
    code: 'AH',
    head: 'Dr. Meena Patel',
    courses: 10,
    students: 520,
    description:
      'Rich curriculum exploring literature, history, philosophy, and cultural studies.',
    icon: BookOpen,
  },
  {
    id: 6,
    name: 'Applied Sciences',
    code: 'AS',
    head: 'Dr. Vikram Singh',
    courses: 5,
    students: 280,
    description:
      'Foundation courses in physics, chemistry, mathematics, and environmental science.',
    icon: Users,
  },
];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Departments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse departments offering world-class education across various disciplines
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="bg-primary-600 p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-10 w-10 text-white" />
                    <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {dept.code}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">Head: {dept.head}</p>
                  <p className="text-gray-700 mb-4">{dept.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{dept.courses} Courses</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{dept.students} Students</span>
                    </div>
                  </div>

                  <button className="w-full text-primary-600 font-semibold hover:text-primary-700 flex items-center justify-center">
                    View Courses <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-lg mb-6 text-primary-100">
            Explore our courses and find the perfect program for your career goals
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}
