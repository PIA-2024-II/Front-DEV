
import TranslatorApp from './components/TranslatorApp';
import utemLogo from './assets/utem.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center r p-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <img 
        src={utemLogo} 
        alt="UTEM Logo" 
        className="mb-8 max-w-xs w-full"
      />
      <TranslatorApp />
    </div>
  );
}

export default App;