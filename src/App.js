import "./App.css";
import Nav from "./components/Nav";
import Update from "./components/Update";
import Timeline from "./components/Timeline";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Nav toggleTheme={toggleTheme} theme={theme} />
        <Update />
        <Timeline />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
