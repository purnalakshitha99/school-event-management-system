import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-4 lg:ml-64">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2026{' '}
            <a href="#" className="hover:underline">
              Campus Events™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <span className="sr-only">Privacy Policy</span>
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <span className="sr-only">Terms</span>
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <span className="sr-only">Contact</span>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;