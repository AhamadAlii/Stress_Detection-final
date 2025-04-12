import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SelectedContext from "./Contexts";
import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";

function App() {
  const [selected, setSelected] = useState(0);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      <div className={`App ${theme} flex flex-col h-screen`}>
        <Header theme={theme} setTheme={setTheme} />
        <div className="flex-grow overflow-auto">
          {selected === 0 ? <Homepage /> : <Dashboard />}
        </div>
      </div>
    </SelectedContext.Provider>
  );
}

export default App;
