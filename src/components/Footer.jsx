import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 sm:py-14 md:py-16 px-6 sm:px-10 md:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 text-center sm:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl font-bold text-white mb-3 sm:mb-4">
            everlyn<span className="text-purple-400">.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xs">
            The first decentralized infrastructure layer for autonomous video AI.
          </p>
          <div className="flex justify-center sm:justify-start space-x-5 mt-5 sm:mt-6 text-xl sm:text-2xl text-gray-400">
            <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-400"><FaGithub /></a>
            <a href="#" className="hover:text-purple-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-purple-400"><FaYoutube /></a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Product</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Use Cases</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Resources</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Company</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-5 sm:pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-xs sm:text-sm text-gray-500 space-y-3 md:space-y-0">
        <p className="text-center md:text-left">
          © 2025 Everlyn AI. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
