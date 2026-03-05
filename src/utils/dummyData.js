// Dummy event data for the application
export const dummyEvents = [
  {
    id: '1',
    title: 'Tech Innovation Summit 2026',
    description: 'Join us for the biggest technology conference of the year featuring leading industry experts, cutting-edge presentations, and networking opportunities.',
    fullDescription: 'The Tech Innovation Summit 2026 is a comprehensive two-day event that brings together technology leaders, innovators, and students from across the region. This summit features keynote speeches from industry veterans, hands-on workshops, startup pitches, and extensive networking sessions. Attendees will gain insights into emerging technologies like AI, blockchain, IoT, and sustainable tech solutions.',
    date: '2026-04-15',
    time: '09:00',
    endTime: '18:00',
    location: 'University Auditorium, Building A',
    capacity: 500,
    registered: 324,
    category: 'Technology',
    organizer: 'Computer Science Club',
    organizerContact: 'cs.club@university.edu',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    status: 'upcoming',
    registrationDeadline: '2026-04-10',
    price: 0,
    tags: ['technology', 'innovation', 'networking', 'AI', 'blockchain'],
    agenda: [
      { time: '09:00', activity: 'Registration & Welcome Coffee' },
      { time: '10:00', activity: 'Keynote: The Future of AI' },
      { time: '11:30', activity: 'Panel Discussion: Emerging Technologies' },
      { time: '13:00', activity: 'Lunch Break' },
      { time: '14:00', activity: 'Workshop: Building with React' },
      { time: '16:00', activity: 'Startup Pitch Competition' },
      { time: '17:30', activity: 'Networking Session' }
    ]
  },
  {
    id: '2',
    title: 'Annual Sports Festival',
    description: 'A week-long celebration of sports featuring various competitions, tournaments, and fitness activities for all skill levels.',
    fullDescription: 'Our Annual Sports Festival is a vibrant celebration of athletic excellence and sportsmanship. The week-long event features multiple sporting competitions including basketball, football, badminton, table tennis, athletics, and swimming. Whether you\'re a seasoned athlete or just beginning your fitness journey, there are events for everyone.',
    date: '2026-03-22',
    time: '08:00',
    endTime: '20:00',
    location: 'University Sports Complex',
    capacity: 1000,
    registered: 756,
    category: 'Sports',
    organizer: 'Athletics Department',
    organizerContact: 'sports@university.edu',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
    status: 'upcoming',
    registrationDeadline: '2026-03-15',
    price: 15,
    tags: ['sports', 'competition', 'fitness', 'tournament'],
    agenda: [
      { time: '08:00', activity: 'Opening Ceremony' },
      { time: '09:00', activity: 'Track & Field Events' },
      { time: '11:00', activity: 'Swimming Competition' },
      { time: '14:00', activity: 'Ball Games Tournament' },
      { time: '17:00', activity: 'Awards Ceremony' }
    ]
  },
  {
    id: '3',
    title: 'Cultural Night: Around the World',
    description: 'Experience diverse cultures through music, dance, food, and traditions from around the globe in one spectacular evening.',
    fullDescription: 'Cultural Night: Around the World is an immersive cultural experience that celebrates the diversity of our campus community. Students from different cultural backgrounds will showcase their heritage through traditional performances, authentic cuisine, art exhibitions, and interactive cultural booths.',
    date: '2026-03-30',
    time: '18:00',
    endTime: '22:00',
    location: 'Student Center Main Hall',
    capacity: 400,
    registered: 298,
    category: 'Cultural',
    organizer: 'International Students Association',
    organizerContact: 'isa@university.edu',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=400&fit=crop',
    status: 'upcoming',
    registrationDeadline: '2026-03-25',
    price: 10,
    tags: ['cultural', 'diversity', 'food', 'performance', 'international'],
    agenda: [
      { time: '18:00', activity: 'Welcome & Cultural Booths Open' },
      { time: '18:30', activity: 'Traditional Dance Performances' },
      { time: '19:30', activity: 'International Food Festival' },
      { time: '20:30', activity: 'Music & Entertainment' },
      { time: '21:30', activity: 'Cultural Exchange & Networking' }
    ]
  },
  {
    id: '4',
    title: 'Career Fair 2026',
    description: 'Connect with top employers, explore career opportunities, and take the first step toward your professional future.',
    fullDescription: 'The Career Fair 2026 is the premier networking event for students seeking internships, co-op positions, and full-time employment opportunities. Over 80 companies from various industries will be present to meet with students, conduct on-the-spot interviews, and provide insights into their career paths.',
    date: '2026-04-05',
    time: '10:00',
    endTime: '16:00',
    location: 'Convention Center',
    capacity: 1200,
    registered: 892,
    category: 'Career',
    organizer: 'Career Services Center',
    organizerContact: 'careers@university.edu',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
    status: 'upcoming',
    registrationDeadline: '2026-03-30',
    price: 0,
    tags: ['career', 'networking', 'jobs', 'internships', 'professional development'],
    agenda: [
      { time: '10:00', activity: 'Registration & Welcome' },
      { time: '10:30', activity: 'Company Exhibitions Open' },
      { time: '12:00', activity: 'Resume Review Sessions' },
      { time: '13:00', activity: 'Industry Panel Discussions' },
      { time: '14:30', activity: 'Interview Sessions' },
      { time: '15:30', activity: 'Networking Reception' }
    ]
  },
  {
    id: '5',
    title: 'Photography Workshop: Street Photography',
    description: 'Learn the art of street photography with professional photographer Sarah Johnson in this hands-on workshop.',
    fullDescription: 'This intensive photography workshop focuses on the dynamic world of street photography. Led by award-winning photographer Sarah Johnson, participants will learn composition techniques, lighting principles, and storytelling through imagery. The workshop includes both theoretical sessions and practical field work.',
    date: '2026-03-25',
    time: '14:00',
    endTime: '17:00',
    location: 'Art Studio, Building C',
    capacity: 25,
    registered: 18,
    category: 'Workshop',
    organizer: 'Photography Club',
    organizerContact: 'photo.club@university.edu',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=400&fit=crop',
    status: 'upcoming',
    registrationDeadline: '2026-03-20',
    price: 25,
    tags: ['photography', 'workshop', 'art', 'creative', 'hands-on'],
    agenda: [
      { time: '14:00', activity: 'Introduction to Street Photography' },
      { time: '14:30', activity: 'Camera Settings & Techniques' },
      { time: '15:30', activity: 'Field Exercise - Campus Walk' },
      { time: '16:30', activity: 'Photo Review & Feedback' }
    ]
  },
  {
    id: '6',
    title: 'Environmental Sustainability Forum',
    description: 'Join the conversation about climate action, sustainable practices, and environmental conservation on campus and beyond.',
    fullDescription: 'The Environmental Sustainability Forum brings together students, faculty, and community leaders to discuss pressing environmental issues and practical solutions. Topics include renewable energy, waste reduction, sustainable transportation, and green building practices.',
    date: '2026-04-22',
    time: '13:00',
    endTime: '17:00',
    location: 'Lecture Hall 101',
    capacity: 150,
    registered: 87,
    category: 'Academic',
    organizer: 'Environmental Science Department',
    organizerContact: 'enviro@university.edu',
    image: 'https://images.unsplash.com/photo-1569163139394-de4e4333fb52?w=800&h=400&fit=crop',
    status: 'upcoming',
    registrationDeadline: '2026-04-18',
    price: 0,
    tags: ['environment', 'sustainability', 'climate', 'conservation'],
    agenda: [
      { time: '13:00', activity: 'Opening Remarks' },
      { time: '13:30', activity: 'Keynote: Climate Change Impact' },
      { time: '14:30', activity: 'Panel: Campus Sustainability' },
      { time: '15:30', activity: 'Workshop: Personal Action Plans' },
      { time: '16:30', activity: 'Q&A and Closing' }
    ]
  }
];

// Dummy user registrations
export const dummyRegistrations = [
  {
    id: 'reg_1',
    eventId: '1',
    userId: '1',
    registrationDate: '2026-03-01',
    status: 'confirmed',
    paymentStatus: 'free',
    qrCode: 'QR_TECH_SUMMIT_USER1',
    checkInStatus: 'pending'
  },
  {
    id: 'reg_2',
    eventId: '3',
    userId: '1',
    registrationDate: '2026-03-05',
    status: 'confirmed',
    paymentStatus: 'paid',
    qrCode: 'QR_CULTURAL_NIGHT_USER1',
    checkInStatus: 'pending'
  },
  {
    id: 'reg_3',
    eventId: '4',
    userId: '1',
    registrationDate: '2026-03-10',
    status: 'confirmed',
    paymentStatus: 'free',
    qrCode: 'QR_CAREER_FAIR_USER1',
    checkInStatus: 'pending'
  }
];

// Dummy notifications
export const dummyNotifications = [
  {
    id: '1',
    title: 'Event Reminder: Tech Innovation Summit 2026',
    message: 'Your registered event "Tech Innovation Summit 2026" is starting in 2 days. Don\'t forget to prepare your questions for the Q&A sessions!',
    type: 'event_reminder',
    isRead: false,
    createdAt: '2026-03-13T10:00:00Z',
    eventId: '1'
  },
  {
    id: '2',
    title: 'Registration Confirmed',
    message: 'Your registration for "Cultural Night: Around the World" has been confirmed. Payment of $10 has been processed successfully.',
    type: 'registration_confirmed',
    isRead: true,
    createdAt: '2026-03-05T14:30:00Z',
    eventId: '3'
  },
  {
    id: '3',
    title: 'New Event Available',
    message: 'A new photography workshop "Street Photography" has been added. Limited seats available - register now!',
    type: 'new_event',
    isRead: false,
    createdAt: '2026-03-12T09:15:00Z',
    eventId: '5'
  },
  {
    id: '4',
    title: 'Event Update',
    message: 'The venue for "Environmental Sustainability Forum" has been updated to Lecture Hall 101. Please make note of this change.',
    type: 'event_update',
    isRead: false,
    createdAt: '2026-03-14T16:45:00Z',
    eventId: '6'
  },
  {
    id: '5',
    title: 'Payment Due',
    message: 'Payment reminder: Your registration for "Annual Sports Festival" requires a payment of $15. Please complete payment by March 15th.',
    type: 'payment_due',
    isRead: true,
    createdAt: '2026-03-11T11:20:00Z',
    eventId: '2'
  }
];

// Organizer specific data
export const dummyOrganizerEvents = [
  {
    id: '1',
    title: 'Tech Innovation Summit 2026',
    description: 'Join us for the biggest technology conference of the year featuring leading industry experts, cutting-edge presentations, and networking opportunities.',
    date: '2026-04-15',
    time: '09:00',
    endTime: '18:00',
    location: 'University Auditorium, Building A',
    capacity: 500,
    registered: 324,
    category: 'Technology',
    status: 'published',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    createdAt: '2026-02-15T10:00:00Z',
    revenue: 0,
    price: 0
  },
  {
    id: '5',
    title: 'Photography Workshop: Street Photography',
    description: 'Learn the art of street photography with professional photographer Sarah Johnson in this hands-on workshop.',
    date: '2026-03-25',
    time: '14:00',
    endTime: '17:00',
    location: 'Art Studio, Building C',
    capacity: 25,
    registered: 18,
    category: 'Workshop',
    status: 'published',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=400&fit=crop',
    createdAt: '2026-02-20T14:00:00Z',
    revenue: 450,
    price: 25
  },
  {
    id: '7',
    title: 'AI & Machine Learning Bootcamp',
    description: 'Intensive 3-day bootcamp covering fundamentals of AI and ML with hands-on coding sessions.',
    date: '2026-05-10',
    time: '09:00',
    endTime: '17:00',
    location: 'Computer Lab 1, Building D',
    capacity: 40,
    registered: 12,
    category: 'Technology',
    status: 'draft',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
    createdAt: '2026-03-01T09:00:00Z',
    revenue: 0,
    price: 75
  }
];

// Attendance data
export const dummyAttendees = [
  {
    id: 'att_1',
    eventId: '1',
    userId: 'user_1',
    userName: 'John Smith',
    userEmail: 'john.smith@university.edu',
    registrationId: 'reg_1',
    qrToken: 'QR_TECH_SUMMIT_USER1',
    checkInTime: null,
    status: 'registered'
  },
  {
    id: 'att_2',
    eventId: '1',
    userId: 'user_2',
    userName: 'Sarah Johnson',
    userEmail: 'sarah.j@university.edu',
    registrationId: 'reg_2',
    qrToken: 'QR_TECH_SUMMIT_USER2',
    checkInTime: '2026-04-15T09:15:00Z',
    status: 'present'
  },
  {
    id: 'att_3',
    eventId: '1',
    userId: 'user_3',
    userName: 'Mike Wilson',
    userEmail: 'mike.w@university.edu',
    registrationId: 'reg_3',
    qrToken: 'QR_TECH_SUMMIT_USER3',
    checkInTime: null,
    status: 'registered'
  },
  {
    id: 'att_4',
    eventId: '5',
    userId: 'user_4',
    userName: 'Emily Davis',
    userEmail: 'emily.d@university.edu',
    registrationId: 'reg_4',
    qrToken: 'QR_PHOTO_WORKSHOP_USER4',
    checkInTime: '2026-03-25T14:05:00Z',
    status: 'present'
  },
  {
    id: 'att_5',
    eventId: '5',
    userId: 'user_5',
    userName: 'David Brown',
    userEmail: 'david.b@university.edu',
    registrationId: 'reg_5',
    qrToken: 'QR_PHOTO_WORKSHOP_USER5',
    checkInTime: null,
    status: 'registered'
  }
];

// Dashboard stats
export const dummyOrganizerStats = {
  totalEvents: 12,
  totalParticipants: 847,
  totalRevenue: 12450,
  upcomingEvents: 3,
  completedEvents: 6,
  draftEvents: 3
};

// Admin Dashboard Stats
export const dummyAdminStats = {
  totalUsers: 2847,
  totalEvents: 156,
  totalClubs: 24,
  totalRevenue: 127500,
  activeUsers: 1892,
  pendingApprovals: 8,
  thisMonthEvents: 12,
  thisMonthRegistrations: 486
};

// Pending Approvals
export const dummyPendingApprovals = [
  {
    id: 'pa_1',
    type: 'event',
    title: 'Blockchain Workshop',
    description: 'An introductory workshop on blockchain technology and cryptocurrencies.',
    submittedBy: 'John Smith',
    submittedAt: '2026-03-02T10:30:00Z',
    category: 'Technology',
    status: 'pending',
    details: {
      date: '2026-04-20',
      location: 'Computer Lab B',
      capacity: 30,
      price: 25
    }
  },
  {
    id: 'pa_2',
    type: 'club',
    title: 'Photography Enthusiasts Society',
    description: 'A club for students passionate about photography and visual arts.',
    submittedBy: 'Sarah Johnson',
    submittedAt: '2026-03-01T14:15:00Z',
    category: 'Arts',
    status: 'pending',
    details: {
      memberLimit: 50,
      meetingFrequency: 'Weekly',
      facultyAdvisor: 'Dr. Amanda Wilson'
    }
  },
  {
    id: 'pa_3',
    type: 'user',
    title: 'Organizer Role Request',
    description: 'Request for organizer privileges to host academic events.',
    submittedBy: 'Michael Chen',
    submittedAt: '2026-02-28T09:45:00Z',
    category: 'Role Upgrade',
    status: 'pending',
    details: {
      currentRole: 'student',
      requestedRole: 'organizer',
      reason: 'Leading academic research symposium'
    }
  },
  {
    id: 'pa_4',
    type: 'event',
    title: 'Mental Health Awareness Week',
    description: 'A week-long series of workshops and talks about mental health.',
    submittedBy: 'Emily Davis',
    submittedAt: '2026-03-03T16:20:00Z',
    category: 'Wellness',
    status: 'pending',
    details: {
      date: '2026-05-15',
      location: 'Student Center',
      capacity: 200,
      price: 0
    }
  }
];

// Clubs Data
export const dummyClubs = [
  {
    id: 'club_1',
    name: 'Computer Science Club',
    description: 'A community for computer science students to learn, share, and grow together.',
    category: 'Technology',
    memberCount: 156,
    foundedDate: '2020-09-15',
    status: 'active',
    president: 'Alex Thompson',
    advisor: 'Dr. Robert Johnson',
    email: 'cs.club@university.edu',
    meetingDay: 'Thursday',
    meetingTime: '18:00',
    location: 'Room 201, Computer Science Building',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
    events: ['1', '5'],
    socialLinks: {
      discord: 'https://discord.gg/cs-club',
      github: 'https://github.com/university-cs-club'
    }
  },
  {
    id: 'club_2',
    name: 'Environmental Action Group',
    description: 'Dedicated to promoting environmental awareness and sustainable practices.',
    category: 'Environment',
    memberCount: 89,
    foundedDate: '2019-03-22',
    status: 'active',
    president: 'Maria Rodriguez',
    advisor: 'Dr. Lisa Green',
    email: 'env.action@university.edu',
    meetingDay: 'Tuesday',
    meetingTime: '17:30',
    location: 'Green Room, Student Center',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
    events: ['3'],
    socialLinks: {
      instagram: '@uni_green_action'
    }
  },
  {
    id: 'club_3',
    name: 'Drama Society',
    description: 'Theater and performing arts club for creative expression and entertainment.',
    category: 'Arts',
    memberCount: 67,
    foundedDate: '2018-11-10',
    status: 'active',
    president: 'James Wilson',
    advisor: 'Prof. Catherine Adams',
    email: 'drama@university.edu',
    meetingDay: 'Monday',
    meetingTime: '19:00',
    location: 'Theater Hall',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    events: ['4'],
    socialLinks: {
      youtube: 'University Drama Society'
    }
  },
  {
    id: 'club_4',
    name: 'Robotics Club',
    description: 'Building and programming robots for competition and fun.',
    category: 'Technology',
    memberCount: 45,
    foundedDate: '2021-01-20',
    status: 'active',
    president: 'Kevin Park',
    advisor: 'Dr. Ahmed Hassan',
    email: 'robotics@university.edu',
    meetingDay: 'Saturday',
    meetingTime: '14:00',
    location: 'Engineering Lab 3',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    events: [],
    socialLinks: {
      github: 'https://github.com/uni-robotics'
    }
  },
  {
    id: 'club_5',
    name: 'Business Innovation Society',
    description: 'Fostering entrepreneurship and business skills among students.',
    category: 'Business',
    memberCount: 123,
    foundedDate: '2019-08-05',
    status: 'active',
    president: 'Anna Chen',
    advisor: 'Prof. Mark Thompson',
    email: 'business.innovation@university.edu',
    meetingDay: 'Wednesday',
    meetingTime: '18:30',
    location: 'Business Building Conference Room',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    events: [],
    socialLinks: {
      linkedin: 'University Business Innovation Society'
    }
  },
  {
    id: 'club_6',
    name: 'Photography Club',
    description: 'Capturing moments and improving photography skills together.',
    category: 'Arts',
    memberCount: 34,
    foundedDate: '2022-02-14',
    status: 'inactive',
    president: 'Sophie Miller',
    advisor: 'Dr. Amanda Wilson',
    email: 'photography@university.edu',
    meetingDay: 'Sunday',
    meetingTime: '15:00',
    location: 'Art Studio 2',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4edfd830?w=400&h=300&fit=crop',
    events: [],
    socialLinks: {
      instagram: '@uni_photo_club'
    }
  }
];

// Reports Data
export const dummyReportsData = {
  monthlyRegistrations: [
    { month: 'Jan', registrations: 234, events: 8 },
    { month: 'Feb', registrations: 312, events: 12 },
    { month: 'Mar', registrations: 486, events: 15 },
    { month: 'Apr', registrations: 298, events: 10 },
    { month: 'May', registrations: 367, events: 14 },
    { month: 'Jun', registrations: 189, events: 6 }
  ],
  categoryDistribution: [
    { name: 'Technology', value: 35, color: '#3B82F6' },
    { name: 'Sports', value: 25, color: '#EF4444' },
    { name: 'Arts', value: 20, color: '#8B5CF6' },
    { name: 'Academic', value: 12, color: '#10B981' },
    { name: 'Social', value: 8, color: '#F59E0B' }
  ],
  revenueData: [
    { month: 'Jan', revenue: 15420 },
    { month: 'Feb', revenue: 18350 },
    { month: 'Mar', revenue: 22100 },
    { month: 'Apr', revenue: 19780 },
    { month: 'May', revenue: 25640 },
    { month: 'Jun', revenue: 26210 }
  ],
  topEvents: [
    { name: 'Tech Innovation Summit', registrations: 324, revenue: 4860 },
    { name: 'Annual Sports Festival', registrations: 756, revenue: 11340 },
    { name: 'Art Exhibition', registrations: 145, revenue: 2175 },
    { name: 'Science Fair', registrations: 203, revenue: 3045 },
    { name: 'Music Concert', registrations: 189, revenue: 3780 }
  ]
};