import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
// import ThemeToggle from "./components/ThemeToggle";
import data from "./dummy.json";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  return (
    <div className="App bg-white dark:bg-slate-900 min-h-screen">
      <Navbar />
      <div className="pt-0">
        <Test text="hello world" num={2} counter={false} />
        {data.map((x, id) => {
          return (
            <div key={x.name}>
              <Test
                text={x.name}
                name={x.name}
                email={x.email}
                age={x.age}
                counter
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
