import { Github, Linkedin, Mail } from 'lucide-react';
import { urls } from '../utils/urlUtils';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Frontend Developer</h3>
            <p className="text-gray-400 mt-2">Building the web, one component at a time</p>
          </div>
          <div className="flex gap-6">
            <a
              href={urls.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={urls.LINKEDIN__URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${urls.EMAIL}`}
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Satis Kumar Chaudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;