import react, { useState } from 'react';

// A simple utility function to generate initials
const getInitials = (name) => {
  if (!name) return '?';
  const names = name.split(' ');
  const first = names[0] ? names[0][0] : '';
  const last = names.length > 1 ? names[names.length - 1][0] : '';
  return `${first}${last}`.toUpperCase();
};

// Generates a consistent, colorful fallback avatar
const FallbackAvatar = ({ name }) => {
  const initials = getInitials(name);
  // Simple hash function to get a consistent color
  const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };
  const hue = Math.abs(hashCode(name)) % 360;

  return (
    <div
      className="w-full h-48 flex items-center justify-center rounded-t-lg text-white"
      style={{ backgroundColor: `hsl(${hue}, 50%, 60%)` }}
    >
      <span className="text-5xl font-bold">{initials}</span>
    </div>
  );
};

// The ContactCard component
function ContactCard({ contact }) {
  const { name, email, phone, imageUrl } = contact;
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const [hasError, setHasError] = useState(false);

  // This function is called if the image fails to load
  const handleImageError = (e) => {
    // Check if the fallback has already been tried
    if (!hasError) {
      setHasError(true);
      // Set to null or a placeholder, but we will render the FallbackAvatar
      setImgSrc(null); 
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image or Fallback Avatar */}
      <div className="w-full h-48 bg-gray-200">
        {!hasError && imgSrc ? (
          <img
            src={imgSrc}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover"
            // This 'referrerPolicy' is often the fix for 403 Forbidden errors
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
        ) : (
          <FallbackAvatar name={name} />
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 truncate" title={name}>
          {name}
        </h3>

        {/* Contact Info */}
        <div className="space-y-3 text-gray-600">
          {/* Email */}
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <a
              href={`mailto:${email}`}
              className="truncate hover:text-blue-600 hover:underline"
              title={email}
            >
              {email}
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <a
              href={`tel:${phone}`}
              className="truncate hover:text-blue-600 hover:underline"
              title={phone}
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

