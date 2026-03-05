# Student Event & Club Management System

A modern, responsive web application for managing campus events and club activities built with React and Tailwind CSS.

## 🚀 Features

### Student Module ✅
- **Event Discovery**: Browse events with advanced search and filtering
- **Event Details**: View comprehensive event information with registration
- **My Registrations**: Track and manage event registrations
- **QR Codes**: Digital tickets for event check-in
- **Notifications**: Stay updated with event reminders and updates

### Authentication ✅
- **JWT-based Authentication**: Secure login/logout with localStorage persistence
- **Role-based Access**: Student, Organizer, and Admin roles
- **Protected Routes**: Security middleware for route protection

### UI/UX ✅
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Dashboard**: Clean indigo/blue university theme
- **Interactive Components**: Hover states, loading states, and animations
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🛠 Tech Stack

- **Frontend**: React 19 with Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios with interceptors
- **State Management**: React Context API
- **Language**: JavaScript (JSX only, no TypeScript)

## 📁 Project Structure

```
src/
├── api/                    # Axios client and API configuration
│   └── client.js
├── components/             # Reusable UI components
├── layouts/                # Layout components
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── Footer.jsx
├── pages/                  # Page components
│   ├── auth/              # Authentication pages
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── student/           # Student role pages
│   │   ├── Events.jsx
│   │   ├── EventDetails.jsx
│   │   ├── MyRegistrations.jsx
│   │   ├── QRCode.jsx
│   │   └── Notifications.jsx
│   ├── organizer/         # Organizer role pages (placeholder)
│   └── admin/             # Admin role pages (placeholder)
├── routes/                 # Route configuration
│   └── ProtectedRoute.jsx
├── context/               # React contexts
│   └── AuthContext.jsx
├── hooks/                 # Custom hooks (unused)
├── utils/                 # Utility functions and data
│   └── dummyData.js
├── App.jsx               # Main app component
└── main.jsx              # Application entry point
```

## 🔧 Installation & Setup

1. **Clone and navigate to the project directory**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open browser**: Navigate to `http://localhost:5173`

## 🎯 Demo Credentials

Use these credentials to test different user roles:

- **Student**: `student@demo.com` / `password`
- **Organizer**: `organizer@demo.com` / `password`
- **Admin**: `admin@demo.com` / `password`

## 📱 Student Module Routes

- `/student/events` - Browse and search campus events
- `/student/events/:id` - View event details and register
- `/student/my-registrations` - Manage event registrations
- `/student/qr/:eventId` - View QR code for event check-in
- `/student/notifications` - View event notifications

## 🔐 Security Features

- JWT token authentication with automatic renewal
- 401 error handling with automatic logout
- Role-based route protection
- Protected API calls with authentication headers

## 📊 Dummy Data

The application includes comprehensive dummy data:
- 6 sample events across different categories
- User registrations and payment statuses
- Various notification types
- Realistic event details and schedules

## 🎨 Design System

- **Primary Colors**: Indigo/Blue theme (`primary-600`, `primary-700`)
- **Typography**: Sans-serif with proper hierarchy
- **Components**: Consistent button styles, form inputs, and cards
- **Layout**: Responsive grid system with mobile-first approach

## 🚧 Future Enhancements

- **Organizer Module**: Event creation and management
- **Admin Module**: User and system management
- **Real API Integration**: Replace dummy data with API calls
- **Payment Integration**: Stripe/PayPal for event fees
- **Real-time Notifications**: WebSocket integration
- **Advanced Search**: Elasticsearch or similar
- **Calendar Integration**: Export to Google Calendar
- **Social Features**: Event sharing and invites

## 📝 Development Notes

- Uses React 19 with modern hooks and patterns
- Axios client configured with interceptors for authentication
- Tailwind CSS for rapid UI development
- Context API for state management - ready for Redux if needed
- Modular architecture for easy feature additions

## 🔧 Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

---

**Built with ❤️ for modern campus event management**