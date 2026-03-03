import { GraduationCap, Mail, Phone } from '../../components/Icons';

const faculty = [
  {
    id: 1,
    name: 'Dr. Anjali Kumar',
    designation: 'Professor & HOD',
    department: 'Computer Science',
    qualification: 'Ph.D. (IIT Delhi)',
    experience: 20,
    email: 'anjali.kumar@nalanda.edu',
    phone: '+91 98765 43210',
    image: '/api/placeholder/200/200',
  },
  {
    id: 2,
    name: 'Dr. Rahul Verma',
    designation: 'Associate Professor',
    department: 'Business Administration',
    qualification: 'Ph.D. (IIM Ahmedabad)',
    experience: 15,
    email: 'rahul.verma@nalanda.edu',
    phone: '+91 98765 43211',
    image: '/api/placeholder/200/200',
  },
  {
    id: 3,
    name: 'Dr. Sunita Singh',
    designation: 'Professor',
    department: 'Electronics & Communication',
    qualification: 'Ph.D. (IIT Bombay)',
    experience: 18,
    email: 'sunita.singh@nalanda.edu',
    phone: '+91 98765 43212',
    image: '/api/placeholder/200/200',
  },
  {
    id: 4,
    name: 'Dr. Rajesh Gupta',
    designation: 'Professor & HOD',
    department: 'Mechanical Engineering',
    qualification: 'Ph.D. (IISc Bangalore)',
    experience: 22,
    email: 'rajesh.gupta@nalanda.edu',
    phone: '+91 98765 43213',
    image: '/api/placeholder/200/200',
  },
  {
    id: 5,
    name: 'Dr. Meena Patel',
    designation: 'Professor',
    department: 'Arts & Humanities',
    qualification: 'Ph.D. (JNU)',
    experience: 16,
    email: 'meena.patel@nalanda.edu',
    phone: '+91 98765 43214',
    image: '/api/placeholder/200/200',
  },
  {
    id: 6,
    name: 'Dr. Vikram Singh',
    designation: 'Associate Professor',
    department: 'Applied Sciences',
    qualification: 'Ph.D. (BITS Pilani)',
    experience: 12,
    email: 'vikram.singh@nalanda.edu',
    phone: '+91 98765 43215',
    image: '/api/placeholder/200/200',
  },
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished team of educators dedicated to excellence in teaching and research
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <GraduationCap className="h-24 w-24 text-gray-500" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.designation}</p>
                <p className="text-sm text-gray-600 mb-4">{member.department}</p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <span className="font-medium">Qualification:</span> {member.qualification}
                  </p>
                  <p>
                    <span className="font-medium">Experience:</span> {member.experience} years
                  </p>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-primary-600" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-primary-600" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-6 text-primary-100">
            We are always looking for passionate educators to join our institution
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </div>
    </div>
  );
}
