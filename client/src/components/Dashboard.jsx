import Graphs from "./Graphs";
import APITest from "./APITest";
import Nav from "./Nav";
import { useState, useContext } from "react";
import { LucideMenu } from "lucide-react";
import SelectedContext from "../Contexts";

function Dashboard() {
  const [showNav, setShowNav] = useState(false);
  const { setSelected } = useContext(SelectedContext);

  return (
    <div className="flex h-full">
      {/* Horizontal Line Menu */}
      <div className="bg-black/20 p-4 rounded-md">
        <LucideMenu
          className="cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>

      {/* Conditionally render Nav */}
      {showNav && <Nav />}

      <div className="flex-1 p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => setSelected(0)}
        >
          Back to Homepage
        </button>
        <Graphs />
        <APITest />
      </div>
    </div>
  );
}

export default Dashboard;
