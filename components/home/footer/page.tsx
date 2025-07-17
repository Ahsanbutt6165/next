import { Github, LucideFacebook, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">AhsanArticles</h2>
            <p className="mt-3 text-sm">
              Insightful articles on web development, technology, and design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/articles" className="hover:text-white">
                  Articles
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Follow Us</h4>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-white">
                <LucideFacebook />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="hover:text-white">
                <Github />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AhsanArticles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
