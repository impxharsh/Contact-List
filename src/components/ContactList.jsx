import React from 'react';
import ContactCard from './ContactCard.jsx'; 

/**
 * Renders a grid of ContactCard components.
 * @param {object} props
 * @param {Array<object>} props.contacts - The array of contact objects to display.
 */
function ContactList({ contacts }) {
  // Handle the empty state (no contacts at all, or no search results)
  if (!contacts || contacts.length === 0) {
    return (
      <div className="text-center p-10 bg-gray-100 text-gray-600 rounded-lg">
        <h2 className="text-xl font-semibold">No Contacts Found</h2>
        <p>Your contact list is empty or your search returned no results.</p>
      </div>
    );
  }

  return (
    // Responsive grid
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;

