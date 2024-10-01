import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import STTComponent from './STT';
import TraductorComponent from './Traductor';
import TTSComponent from './TTS';

type TabType = 'STT' | 'Traductor' | 'TTS';

const TranslatorApp: React.FC = () => {

  // Estado para controlar la pestaña activa
  const [activeTab, setActiveTab] = useState<TabType>('STT');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => { // useEffect hook para aplicar tema oscuro
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Traductor Mapudungun - Español</h1>
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? <Sun className="text-yellow-500" size={24} /> : <Moon className="text-gray-700" size={24} />}
        </button>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Microservicios Individuales</h2>
        <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
          {['STT', 'Traductor', 'TTS'].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 transition-colors duration-300 ${
                activeTab === tab 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => handleTabChange(tab as TabType)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="text-gray-800 dark:text-gray-200">
        {activeTab === 'STT' && <STTComponent />}
        {activeTab === 'Traductor' && <TraductorComponent />}
        {activeTab === 'TTS' && <TTSComponent />}
      </div>
    </div>
  );
};

export default TranslatorApp;