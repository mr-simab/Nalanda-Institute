import { GraduationCap, Award, Users, Target } from '../../components/Icons';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our journey of excellence in education and commitment to shaping future leaders
          </p>
        </div>

        {/* History */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary-600">Our History</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 1999, Nalanda Institute has been at the forefront of educational
              excellence for over two decades. Named after the ancient Nalanda University,
              we carry forward the legacy of being a premier center of learning.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Starting with just 3 departments and 500 students, we have grown into a
              comprehensive institution with 15 departments, offering 50+ courses to over 5000
              students from across the country.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="h-10 w-10 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide world-class education that empowers students with knowledge, skills,
              and values necessary to excel in their chosen fields and contribute meaningfully
              to society.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Award className="h-10 w-10 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as a leading institution of higher learning, known for academic
              excellence, innovation, research, and the holistic development of students.
            </p>
          </div>
        </div>

        {/* Values */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary-600">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Excellence in Education',
                'Integrity & Ethics',
                'Innovation & Creativity',
                'Diversity & Inclusion',
                'Social Responsibility',
                'Continuous Learning',
              ].map((value) => (
                <div key={value} className="text-center p-4">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Rajesh Sharma', role: 'Director', image: '/api/placeholder/200/200' },
              { name: 'Dr. Priya Singh', role: 'Dean of Academics', image: '/api/placeholder/200/200' },
              { name: 'Prof. Amit Patel', role: 'Dean of Research', image: '/api/placeholder/200/200' },
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                <p className="text-primary-600">{person.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
