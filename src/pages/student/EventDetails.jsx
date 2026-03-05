import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { dummyEvents, dummyRegistrations } from '../../utils/dummyData';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const event = dummyEvents.find(e => e.id === id);
  const isAlreadyRegistered = dummyRegistrations.some(reg => reg.eventId === id);

  if (!event) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Event Not Found</h1>
        <p className="text-gray-600 mt-2">The event you're looking for doesn't exist.</p>
        <Link to="/student/events" className="mt-4 inline-block text-primary-600 hover:text-primary-500">
          Back to Events
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Technology: 'bg-blue-100 text-blue-800',
      Sports: 'bg-green-100 text-green-800',
      Cultural: 'bg-purple-100 text-purple-800',
      Career: 'bg-orange-100 text-orange-800',
      Workshop: 'bg-pink-100 text-pink-800',
      Academic: 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const handleRegister = async () => {
    setIsRegistering(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsRegistering(false);
    setRegistrationSuccess(true);
    
    // In a real app, this would update the global state or refetch data
  };

  const registrationDeadlinePassed = new Date(event.registrationDeadline) < new Date();
  const capacityFull = event.registered >= event.capacity;
  const canRegister = !isAlreadyRegistered && !registrationDeadlinePassed && !capacityFull;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link 
          to="/student/events" 
          className="inline-flex items-center text-primary-600 hover:text-primary-500 mb-4"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h1>
        <div className="flex flex-wrap items-center gap-4">
          <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
          <span className="text-sm text-gray-500">
            Organized by {event.organizer}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Event Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Event Image */}
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Description */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Event</h2>
            <p className="text-gray-700 leading-relaxed">
              {event.fullDescription}
            </p>
          </div>

          {/* Agenda */}
          {event.agenda && (
            <div className="bg-white p-6 rounded-lg shadow border">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Agenda</h2>
              <div className="space-y-3">
                {event.agenda.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-16 text-sm font-medium text-primary-600">
                      {formatTime(item.time)}
                    </div>
                    <div className="text-gray-700">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Event Info & Registration */}
        <div className="space-y-6">
          {/* Registration Card */}
          <div className="bg-white p-6 rounded-lg shadow border">
            {registrationSuccess ? (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-4">You have been successfully registered for this event.</p>
                <Link
                  to={`/student/qr/${event.id}`}
                  className="inline-block w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  View QR Code
                </Link>
              </div>
            ) : isAlreadyRegistered ? (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Already Registered</h3>
                <p className="text-gray-600 mb-4">You are already registered for this event.</p>
                <Link
                  to={`/student/qr/${event.id}`}
                  className="inline-block w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  View QR Code
                </Link>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Register for Event</h3>
                {event.price > 0 && (
                  <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-yellow-800 font-medium">Registration Fee: ${event.price}</p>
                    </div>
                  </div>
                )}
                
                {registrationDeadlinePassed ? (
                  <div className="text-center py-4">
                    <p className="text-red-600 font-medium">Registration deadline has passed</p>
                  </div>
                ) : capacityFull ? (
                  <div className="text-center py-4">
                    <p className="text-red-600 font-medium">Event is at full capacity</p>
                  </div>
                ) : (
                  <button
                    onClick={handleRegister}
                    disabled={isRegistering}
                    className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
                  >
                    {isRegistering ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Registering...
                      </div>
                    ) : (
                      `Register ${event.price > 0 ? `($${event.price})` : '(Free)'}`
                    )}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Event Information */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h3>
            <div className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Date & Time</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {formatDate(event.date)}<br />
                  {formatTime(event.time)} - {formatTime(event.endTime)}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900">{event.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Capacity</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {event.registered} / {event.capacity} registered
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-primary-600 h-2 rounded-full" 
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Registration Deadline</dt>
                <dd className="mt-1 text-sm text-gray-900">{formatDate(event.registrationDeadline)}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Contact</dt>
                <dd className="mt-1 text-sm text-gray-900">{event.organizerContact}</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;