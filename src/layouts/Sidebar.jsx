import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const getNavigationItems = () => {
    switch (user?.role) {
      case 'student':
        return [
          { name: 'Events', href: '/student/events', icon: CalendarIcon },
          { name: 'My Registrations', href: '/student/my-registrations', icon: TicketIcon },
          { name: 'QR Codes', href: '/student/qr', icon: QrCodeIcon },
          { name: 'Notifications', href: '/student/notifications', icon: BellIcon },
        ];
      case 'organizer':
        return [
          { name: 'Dashboard', href: '/organizer/dashboard', icon: HomeIcon },
          { name: 'My Events', href: '/organizer/events', icon: CalendarIcon },
          { name: 'Create Event', href: '/organizer/events/create', icon: PlusIcon },
          { name: 'Registrations', href: '/organizer/registrations', icon: UsersIcon },
        ];
      case 'admin':
        return [
          { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
          { name: 'Pending Approvals', href: '/admin/pending-approvals', icon: ClockIcon },
          { name: 'All Events', href: '/admin/events', icon: CalendarIcon },
          { name: 'Clubs', href: '/admin/clubs', icon: UsersIcon },
          { name: 'Reports', href: '/admin/reports', icon: ChartBarIcon },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <aside className="fixed top-16 left-0 z-20 w-64 h-screen pt-6 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  location.pathname === item.href ? 'bg-gray-100 text-primary-600' : ''
                }`}
              >
                <item.icon className={`w-5 h-5 transition duration-75 ${
                  location.pathname === item.href 
                    ? 'text-primary-600' 
                    : 'text-gray-500 group-hover:text-gray-900'
                }`} />
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

// SVG Icons as React components
const CalendarIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const TicketIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" clipRule="evenodd" />
  </svg>
);

const QrCodeIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 4a2 2 0 012-2h3v3H4v3H2V4zM9 2h2v2H9V2zM7 9H2v2h5V9zM2 16a2 2 0 002 2h3v-3H4v-3H2v4zM9 18h2v-2H9v2zM13 2h3a2 2 0 012 2v4h-3V5h-3V2zM18 9h-5v2h5V9zM18 16v-4h-3v3h-3v3h4a2 2 0 002-2z" />
  </svg>
);

const BellIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
  </svg>
);

const HomeIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const PlusIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

const UsersIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
  </svg>
);

const ChartBarIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
);

const ClockIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clipRule="evenodd" />
  </svg>
);

export default Sidebar;