import { contacts } from './data.js';

/**
 * Simulates fetching contacts from an API.
 * It has a delay to mimic network latency.
 * It also has a small chance to fail to demonstrate error handling.
 */
export const fetchContacts = () => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // 99% chance of success, 1% chance of failure
      if (Math.random() > 0.01) {
        // Resolve with the contacts data
        resolve(contacts);
      } else {
        // Reject with an error message
        reject(new Error('Failed to fetch contacts. Please try again.'));
      }
    }, 1000); // 1 second delay
  });
};

