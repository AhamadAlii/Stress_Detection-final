import { useState, useEffect } from "react";

function Header(props) {
  const toggleTheme = () => {
    props.setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="mt-8 mx-28 text-4xl pb-4 flex justify-between rounded-xl">
        Stress Detection System
        <button
          onClick={toggleTheme}
          className="theme-toggle text-xl bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Toggle Theme
        </button>
      </div>
      <hr />
    </>
  );
}

export default Header;
