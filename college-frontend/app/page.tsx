import Link from 'next/link';
import { GraduationCap, Users, Award, Building, BookOpen, TrendingUp } from '../components/Icons';

export default function Home() {
  const stats = [
    { name: 'Students', value: '5000+', icon: Users },
    { name: 'Faculty', value: '200+', icon: GraduationCap },
    { name: 'Departments', value: '15+', icon: Building },
    { name: 'Courses', value: '50+', icon: BookOpen },
    { name: 'Awards', value: '100+', icon: Award },
    { name: 'Years', value: '25+', icon: TrendingUp },
  ];

  const features = [
    {
      title: 'Quality Education',
      description:
        'We provide world-class education with experienced faculty and modern facilities.',
    },
    {
      title: 'Modern Infrastructure',
      description:
        'State-of-the-art laboratories, library, and sports facilities for holistic development.',
    },
    {
      title: 'Industry Connect',
      description:
        'Strong industry partnerships for internships, placements, and research collaborations.',
    },
    {
      title: 'Research & Innovation',
      description:
        'Focus on cutting-edge research and innovation across various disciplines.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
{/* Hero Section */}
<section className="relative text-white py-24 overflow-hidden">

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop"
    alt="Campus"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Welcome to Nalanda Institute
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-200">
        Empowering Minds, Shaping Futures
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/admission"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
        >
          Apply Now
        </Link>
        <Link
          href="/about"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>

</section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.name} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of students who have transformed their lives at Nalanda Institute
          </p>
          <Link
            href="/admission"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </div>
  );
}
