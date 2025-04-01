import React from "react";
import TranslatorForm from "./components/TranslatorForm";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Voice Translator</h1>
        <TranslatorForm />
      </div>
    </div>
  );
};


export default App;
