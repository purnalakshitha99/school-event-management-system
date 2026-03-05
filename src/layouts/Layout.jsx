import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="pt-16 lg:ml-64">
        <div className="p-4 min-h-screen">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;