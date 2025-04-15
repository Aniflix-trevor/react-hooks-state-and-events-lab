import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Better naming for clarity

  function handleAppClassClick() {
    setIsDarkMode((prevMode) => !prevMode); // Toggle between true and false
  }

  const appClass = isDarkMode ? "App dark" : "App light"; // Set class based on state

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleAppClassClick}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
