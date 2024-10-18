import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              RED
            </button>
            <button
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              GREEN
            </button>
            <button
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              BLUE
            </button>
            <button
              onClick={() => setColor("yellow")}
              style={{ backgroundColor: "yellow" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              YELLOW
            </button>
            <button
              onClick={() => setColor("orange")}
              style={{ backgroundColor: "orange" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              ORANGE
            </button>
            <button
              onClick={() => setColor("pink")}
              style={{ backgroundColor: "pink" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              PINK
            </button>
            <button
              onClick={() => setColor("olive")}
              style={{ backgroundColor: "olive" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              OLIVE
            </button>
            <button
              onClick={() => setColor("violet")}
              style={{ backgroundColor: "violet" }}
              className=" px-4 py-1 rounded-full text-white shadow-lg"
            >
              WHITE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
