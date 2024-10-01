import React, { useState, useEffect } from 'react';
import { Mic, Trash2 } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const STTComponent: React.FC = () => {

    // Estado para controlar el servicio de STT a utilizar
    const [sttService, setSTTService] = useState<'custom' | 'react-speech'>('custom');
    const [isListening, setIsListening] = useState(false);
    const [customTranscription, setCustomTranscription] = useState('');
    
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        setIsListening(listening);
    }, [listening]);

    const handleListen = () => {
        if (sttService === 'react-speech') {
            if (!isListening) {
                SpeechRecognition.startListening({ continuous: true, language: 'es-ES' });
            } else {
                SpeechRecognition.stopListening();
            }
        } else {
            // Aquí iría la lógica para tu servicio personalizado de STT
            setIsListening(!isListening);
            if (!isListening) {
                setCustomTranscription('Simulando transcripción del servicio personalizado...');
            }
        }
    };

    const handleClearTranscript = () => {
        if (sttService === 'react-speech') {
            resetTranscript();
        } else {
            setCustomTranscription('');
        }
    };

    const renderContent = () => {
        if (sttService === 'react-speech' && !browserSupportsSpeechRecognition) {
            return (
                <div className="text-red-500 font-semibold">
                    Tu navegador no soporta el reconocimiento de voz de React Speech Recognition.
                    Por favor, intenta con otro navegador o usa nuestro servicio personalizado.
                </div>
            );
        }

        return (
            <>
                <div className="flex justify-center">
                    <button 
                        onClick={handleListen}
                        className={`p-4 rounded-full transition-colors duration-300 flex items-center justify-center
                            ${isListening ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-red-500 hover:bg-red-600'}
                            relative group`}
                    >
                        <Mic className="text-white" size={48} />
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {isListening ? 'Detener grabación' : 'Iniciar grabación'}
                        </span>
                    </button>
                </div>
                <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">Transcripción:</h3>
                        <button 
                            onClick={handleClearTranscript}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            title="Limpiar transcripción"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                    <p>{sttService === 'react-speech' ? transcript : customTranscription}</p>
                </div>
            </>
        );
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <p className="text-lg">Pulsa para empezar a escuchar</p>
                <select 
                    value={sttService} 
                    onChange={(e) => setSTTService(e.target.value as 'custom' | 'react-speech')}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1"
                >
                    <option value="custom">Servicio Personalizado</option>
                    <option value="react-speech">React Speech Recognition</option>
                </select>
            </div>
            {renderContent()}
        </div>
    );
};

export default STTComponent;