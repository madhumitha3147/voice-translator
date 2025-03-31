import React from "react";
import TranslatorForm from "./components/TranslatorForm";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Voice Translator</h1>
      <TranslatorForm />
    </div>
  );
};

export default App;
