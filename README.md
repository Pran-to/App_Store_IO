project name : App_Store_Io (Hero_Io)
A clean and functional React application designed to manage application installations. Users can explore trending apps, install them to their local environment, and manage their "Installed" list with real-time UI updates and persistent storage.

📝 Description
This project focuses on a seamless user experience for managing digital assets. It features a centralized context for app data and utilizes browser LocalStorage to ensure that your "Installed Apps" list persists even after refreshing the page. The dashboard includes:

Client-Side Routing: Navigates between different views (like Home and Installation) without page reloads using React Router.

Dynamic Rendering: Displays only the apps currently stored in the user's local database.

Persistent Storage: Uses custom utility functions to add, retrieve, and remove app IDs from localStorage.

Interactive UI: Real-time removal of app cards from the view upon uninstallation.

State Management: Optimized with React hooks like useState, useEffect, and the use API for context consumption.

🛠️ Technologies Used
Frontend Core
React.js: The primary library for building the component-based user interface.

React Router: Handles navigation and URL synchronization for a Single Page Application (SPA) experience.

Tailwind CSS: Used for rapid, responsive styling and layout management.

DaisyUI: A Tailwind plugin used for pre-styled components like buttons, cards, and collapses.

Icons & Formatting
React Icons: Specifically using FaStar for ratings and MdOutlineFileDownload for download metrics.

Intl.NumberFormat: Used to format download counts into compact, human-readable strings (e.g., 1.2M).

Data Handling
Context API: Managing global app data through AppContext.

LocalStorage API: For persisting app installation states locally on the client's machine.

JavaScript (ES6+): Leveraging array methods like .filter(), .map(), and .includes() for data manipulation.
