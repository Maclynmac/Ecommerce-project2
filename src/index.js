// Import necessary modules and components
import React from "react"; // Import the React library
import ReactDOM from "react-dom/client"; // Import the ReactDOM library (client version)
import App from "./App"; // Import the main App component
import "./index.css"; // Import the main CSS file
import { Provider } from "react-redux"; // Import the Provider component from React Redux
import store from "./store"; // Import the Redux store configuration

// Create a root object for rendering using concurrent mode
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main application component within a StrictMode and wrapped in a Redux Provider
root.render(
  <React.StrictMode> {/* Enable React's StrictMode */}
    <Provider store={store}> {/* Wrap the App component with Redux store */}
      <App /> {/* Render the main App component */}
    </Provider>
  </React.StrictMode>
);
