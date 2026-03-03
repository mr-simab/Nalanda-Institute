import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Nalanda Institute</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering minds, shaping futures through excellence in education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-400 hover:text-white text-sm">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-gray-400 hover:text-white text-sm">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Computer Science</li>
              <li className="text-gray-400 text-sm">Business Administration</li>
              <li className="text-gray-400 text-sm">Engineering</li>
              <li className="text-gray-400 text-sm">Arts & Humanities</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  123 Education Street, Learning City, State 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@nalanda.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nalanda Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
