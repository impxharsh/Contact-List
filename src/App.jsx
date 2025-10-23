import { useState, useEffect, useMemo } from 'react';
import { fetchContacts } from './api.js';
import ContactList from './components/ContactList.jsx';
import SearchBar from './components/Searchbar.jsx';
import LoadingAnimation from './components/LoadingAnimation.jsx';
import AddContactModal from './components/AddContactModal.jsx';

const LOCAL_STORAGE_KEY = 'myContacts';

function App() {
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch contacts on initial load
  useEffect(() => {
    const loadContacts = async () => {
      try {

        const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(storedContacts){
          setAllContacts(JSON.parse(storedContacts));
        }
        else{
          const contacts = await fetchContacts();
          setAllContacts(contacts);
          localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
        }
        
      } catch (err) {
        setError(err.message || 'Failed to fetch contacts.');
      } finally {
        setLoading(false);
      }
    };
    loadContacts();
  }, []);

  // Memoized search filtering (by name AND phone)
  const filteredContacts = useMemo(() => {
    const term = searchTerm.toLowerCase().replace(/[\s-]/g, ''); // Normalize search term
    if (term === '') {
      return allContacts;
    }
    return allContacts.filter((contact) => {
      const nameMatch = contact.name.toLowerCase().includes(term);
      // Normalize phone number for searching
      const phoneMatch = contact.phone.replace(/[\s-]/g, '').includes(term);
      return nameMatch || phoneMatch;
    });
  }, [allContacts, searchTerm]);

  // Handle adding a new contact
   const handleAddContact = (newContact) => {
    const newContactWithId = {
      ...newContact,
      id: Date.now().toString(), 
      imageUrl: newContact.imageUrl || `https://placehold.co/400x400/EBF4FF/76A9FA?text=${newContact.name.charAt(0)}`
    };
    
    // Create the new, updated list
    const updatedContacts = [newContactWithId, ...allContacts];
    
    // Update state
    setAllContacts(updatedContacts);
    
    // AND Save the updated list to localStorage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
    
    setIsModalOpen(false); // Close the modal
  };

  // Helper function to render main content based on state
  const renderContent = () => {
    if (loading) {
      return <LoadingAnimation />;
    }
    if (error) {
      return (
        <div className="text-center py-10 text-red-600 dark:text-red-400">
          <h3 className="text-xl font-semibold">Error: {error}</h3>
          <p>Please try refreshing the page.</p>
        </div>
      );
    }
    return <ContactList contacts={filteredContacts} />;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            {/* App Title */}
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Contacts
            </h1>
            
            {/* Header Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                <span className="hidden sm:block">Add Contact</span>
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-5">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:px-8">
        {renderContent()}
      </main>

      {/* Add Contact Modal */}
      <AddContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddContact={handleAddContact}
      />
    </div>
  );
}

export default App;


