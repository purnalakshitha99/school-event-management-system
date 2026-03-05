import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dummyEvents, dummyRegistrations } from '../../utils/dummyData';

const QRCode = () => {
  const { eventId } = useParams();
  const [showFullScreen, setShowFullScreen] = useState(false);

  const event = dummyEvents.find(e => e.id === eventId);
  const registration = dummyRegistrations.find(r => r.eventId === eventId);

  if (!event || !registration) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">QR Code Not Found</h1>
        <p className="text-gray-600 mt-2">
          You don't have a registration for this event or the event doesn't exist.
        </p>
        <Link 
          to="/student/my-registrations" 
          className="mt-4 inline-block text-primary-600 hover:text-primary-500"
        >
          Back to My Registrations
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

  // Generate a simple QR code placeholder using ASCII art
  const generateQRPlaceholder = () => {
    const qrPattern = [
      "█▀▀▀▀▀█ ▄▀█ ▀▄█ █▀▀▀▀▀█",
      "█ ███ █ ▀██▄▄ █ █ ███ █", 
      "█ ▀▀▀ █ █▀▄█  ▀ █ ▀▀▀ █",
      "▀▀▀▀▀▀▀ ▀ █▄▀ █ ▀▀▀▀▀▀▀",
      "▄██▀▄▀▀▀▄█▄▀▄▀█ ▄█ ▀▄▄▄",
      "▄▀ ▄█▀█▀     ▀▄▄▀▄█ ██▀",
      "█ ▄▄█▄▀▄▄█▀▀▄▀▄█▄▀ ▄█▀▀",
      "▀ ▀ ▀  █▄█  ▀▀▄█ ▀██ ▄█",
      "█▀▀▀▀▀█ ▀▀▄▄▄▀█ ▀ █▀▄▀ ", 
      "█ ███ █  ▀█  ▄▀█ ▀▀▄▀▄█",
      "█ ▀▀▀ █ ▀▄█▀ █▀▄██▄▄▀▀█",
      "▀▀▀▀▀▀▀ ▀  ▀▀  ▀▀ ▀▀ ▀▀"
    ];
    return qrPattern;
  };

  const handleDownload = () => {
    // In a real app, this would generate and download an actual QR code image
    alert('QR code download functionality would be implemented here');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `QR Code for ${event.title}`,
        text: `My entry ticket for ${event.title}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('QR code link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link 
          to="/student/my-registrations" 
          className="inline-flex items-center text-primary-600 hover:text-primary-500 mb-4"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to My Registrations
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Event QR Code</h1>
        <p className="text-gray-600 mt-1">
          Present this QR code at the event entrance for check-in
        </p>
      </div>

      {/* QR Code Card */}
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8">
        {/* Event Info */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <img
              src={event.image}
              alt={event.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{event.title}</h2>
              <p className="text-sm text-gray-500">{event.organizer}</p>
            </div>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{formatDate(event.date)} at {formatTime(event.time)}</p>
            <p>{event.location}</p>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div 
            className="bg-white p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setShowFullScreen(true)}
          >
            <div className="font-mono text-xs leading-tight text-center">
              {generateQRPlaceholder().map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
            <div className="text-center mt-2">
              <p className="text-xs text-gray-500">QR Code Placeholder</p>
              <p className="text-xs text-gray-400 font-mono">{registration.qrCode}</p>
            </div>
          </div>
        </div>

        {/* Registration Details */}
        <div className="border-t pt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Registration Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Registration ID:</span>
              <span className="ml-2 font-mono text-gray-900">{registration.id}</span>
            </div>
            <div>
              <span className="text-gray-500">Status:</span>
              <span className={`ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                registration.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {registration.status}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Registered:</span>
              <span className="ml-2 text-gray-900">{formatDate(registration.registrationDate)}</span>
            </div>
            <div>
              <span className="text-gray-500">Payment:</span>
              <span className={`ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                registration.paymentStatus === 'paid' || registration.paymentStatus === 'free'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {registration.paymentStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={() => setShowFullScreen(true)}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            View Fullscreen
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Download QR
          </button>
          <button
            onClick={handleShare}
            className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Share
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-900 mb-2 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Check-in Instructions
        </h3>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Present this QR code at the event entrance</li>
          <li>Ensure your phone screen brightness is at maximum</li>
          <li>Have a backup screenshot saved to your device</li>
          <li>Arrive 15-30 minutes early to avoid queues</li>
          <li>Bring a valid ID as backup verification</li>
        </ul>
      </div>

      {/* Fullscreen Modal */}
      {showFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">QR Code</h3>
              <button
                onClick={() => setShowFullScreen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-center">
              <div className="font-mono text-sm leading-tight mb-4 bg-white p-6 border border-gray-200 rounded">
                {generateQRPlaceholder().map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
              <p className="text-sm text-gray-600">{event.title}</p>
              <p className="text-xs text-gray-500 font-mono mt-1">{registration.qrCode}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCode;