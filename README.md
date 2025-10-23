# 📇 Contact List Application

A modern single-page **Contact List Application** built with **React**, **Vite**, and **Tailwind CSS** as part of the **Tria Frontend Assignment**.

This project focuses on creating a **clean, responsive, and user-friendly** experience while fulfilling all core and optional requirements.

---

## ✨ Features

### ✅ Core Features
- **View Contact List** – Fetches and displays contacts in a clean, responsive grid layout.  
- **Asynchronous Data Handling** – Simulates API calls with **loading** and **error** states.  
- **Loading State** – A **skeleton loader** mimics card layout for a smooth user experience.  
- **Error State** – Gracefully handles and displays API errors.  
- **Advanced Search** – Instantly filter contacts by **name** or **phone number**.  
- **Add New Contact** – Fully functional **modal form** to add new contacts dynamically.  
- **Responsive Design** – Works seamlessly across **mobile**, **tablet**, and **desktop**.  
- **Image Fallbacks** – Generates a color-coded avatar with initials when an image fails to load.  

---

## 🧭 How to Run Locally

Follow these steps to set up the project on your local machine:

```bash
# 1. Clone the repository
git clone https://github.com/impxharsh/Contact-List.git

# 2. Navigate to the project directory
cd Contact-List

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev


Now open http://localhost:5173
 (or the port shown in your terminal) to view the app in your browser


 ##💡 Assumptions & Design Choices
 ### 🧠 Product Sense

- Clickable Actions: Email and phone fields are interactive using mailto: and tel: links.

- Search by Phone: Added support for phone number search for realistic user behavior.

- Add to Top: Newly added contacts appear at the top of the list for instant visibility.

- Prominent Add Button: “Add Contact” button is placed in the header for easy access.

### 🎨 UX / UI

- Skeleton Loader: Chosen over a spinner for better perceived performance and smoother experience.

- Modal Form: Keeps users “in context” while adding a contact without navigating away.

### ⚙️ Technical Choices

- Memoized Search: Implemented with useMemo to optimize performance — the filtered list only updates when data or the search term changes.

- Mock API:

- Includes a 1-second delay to simulate real-world network latency.

- Adds a random failure chance to test error handling and resilience.

### 🧩 Tech Stack
Tool	Purpose
React	Core framework for building the UI
Vite	Lightning-fast development and build tooling
Tailwind CSS	Utility-first styling for responsive design