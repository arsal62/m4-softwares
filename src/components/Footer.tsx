import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/Leonardo_Lightning_XL_Create_a_modern_futuristic_3D_logo_for_a_0.jpg"
                alt="M4 Softwares Logo"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                M4 Softwares
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming businesses through innovative technology solutions. 
              We deliver excellence in AI/ML, Web Development, Mobile Apps, and Digital Marketing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <a 
                  href="https://wa.me/923362159777" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +92 336 2159777
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:tech@m4softwares.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  tech@m4softwares.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} M4 Softwares. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

