import "./App.css";
import Nav from "./components/Nav";
import Update from "./components/Update";
import Timeline from "./components/Timeline";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "react-loading-screen";
import Error from "./components/Error";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((res) => {
        setDatas(res.data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => setError(true));
  }, []);

  const addTask = async (title) => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      userId: 1,
      id: 1,
      completed: false,
    });
    const data = await res.data;
    setDatas([data, ...datas]);
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Nav toggleTheme={toggleTheme} theme={theme} />
        {loading ? (
          <LoadingScreen
            loading={true}
            bgColor="rgba(255,255,255,0.8)"
            spinnerColor="#9ee5f8"
            textColor="#676767"
            logoSrc=""
            text=""
          ></LoadingScreen>
        ) : error ? (
          <Error />
        ) : (
          <>
            <Update addTask={addTask} />
            <Timeline datas={datas} />
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
