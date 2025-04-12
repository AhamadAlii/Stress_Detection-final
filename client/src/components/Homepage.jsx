import React from 'react';
import { useContext } from 'react';
import SelectedContext from '../Contexts';

function Homepage() {
  const { setSelected } = useContext(SelectedContext);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the Stress Detection System</h1>
      <p className="text-lg mb-8 text-center">
        This system helps you detect your stress levels using various physiological signals.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setSelected(1)}
      >
        Get Started
      </button>
    </div>
  );
}

export default Homepage;
