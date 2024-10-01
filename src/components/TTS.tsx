import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';

const TTSComponent: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleConvertToSpeech = () => {
    // Actualiza el outputText con el texto del inputText
    setOutputText(`Aqui se deberia escuchar la pronunciacion de: ${inputText}`);
  };

  return (
    <div className="space-y-4">
      <p className="text-lg">Escribe Texto en Mapudungun</p>
      <textarea
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
        onClick={handleConvertToSpeech}
      >
        Convertir a voz
      </button>
      <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Traducción:</h3>
        <p>{outputText}</p>
        <button className="mt-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
          <Volume2 size={24} />
        </button>
      </div>
    </div>
  );
};

export default TTSComponent;