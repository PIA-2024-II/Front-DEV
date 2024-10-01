import React, { useState } from 'react';

const TraductorComponent: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTranslate = () => {
    // Actualiza el outputText con el texto del inputText
    setOutputText(`Aqui se deberia ver la traduccion de: ${inputText}`);
  };

  return (
    <div className="space-y-4">
      <p className="text-lg">Escribe Texto para traducir a Mapudungun</p>
      <textarea
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
        onClick={handleTranslate}
      >
        Traducir
      </button>
      <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Traducción:</h3>
        <p>{outputText}</p>
      </div>
    </div>
  );
};

export default TraductorComponent;