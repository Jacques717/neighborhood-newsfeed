
# Neighborhood Newsfeed

A React-based application that displays widgets such as local events, landowner updates, wayfinding locations, and Facebook posts. The project utilizes Firebase as the backend, TailwindCSS for styling, and modular React components to ensure scalability and maintainability.

---

## Features

- **Dynamic Widget Rendering**:
  - Supports multiple widgets like Header, Local Events, Landowner Updates, Facebook Posts, and Wayfinding.
  - Widgets are styled using TailwindCSS and include a modern, consistent UI.

- **Data Integration**:
  - Data fetched dynamically from Firebase's Realtime Database based on `screenStateId`.

- **Optimized User Experience**:
  - Widgets are non-scrollable but include a fade effect to handle overflow content gracefully.
  - QR codes are displayed in widget headers for user interaction.

- **Reusable Components**:
  - Each widget is a standalone React component, ensuring modularity and easy updates.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+)
- **npm** or **yarn**
- **Firebase account** (for backend data integration)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jacques717/neighborhood-newsfeed.git
   cd neighborhood-newsfeed


2. Install dependencies
    ```bash
    npm install
    ```

3. Set up a ```.env``` file in the root directory:
    ```bash
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_DATABASE_URL=your_firebase_database_url
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
    ```

### Running the Application
1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to:
    ```bash
    http://localhost:3000/screenState/{screenStateId}
    ```

Replace ```{screenStateId}``` with a valid ID from your Firebase database.


## Project Structure

```

├── public
├── src
│   ├── components
│   │   ├── HeaderWidget.js       # Header widget component
│   │   ├── EventWidget.js        # Local events widget component
│   │   ├── LandownerWidget.js    # Landowner updates widget component
│   │   ├── WayfindingWidget.js   # Wayfinding locations widget component
│   │   ├── FacebookWidget.js     # Facebook posts widget component
│   │   └── App.js                # Main application component
│   ├── services
│   │   └── firebase.js           # Firebase configuration
│   ├── styles
│   │   └── globals.css           # Tailwind base styles
│   ├── utils                     # Utility functions
│   └── index.js                  # Entry point for React
├── .env                          # Environment variables
├── package.json
├── tailwind.config.js            # TailwindCSS configuration
└── README.md                     # Project documentation
```


### Technologies Used
* Frontend:
    * React.js
    * TailwindCSS
    * React Router
* Backend:
    * Firebase Realtime Database
Other Tools:
    * eslint and prettier for code formatting
    * mdi-react for Material Design icons



### Deployment
1. Build the project:

```bash
npm run build
```

2. Deploy to Firebase Hosting or any static hosting provider:

```bash
firebase deploy
```
