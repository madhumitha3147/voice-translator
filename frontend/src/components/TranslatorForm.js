import React, { useState } from 'react';
import axios from 'axios';

const TranslatorForm = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [isRecording, setIsRecording] = useState(false);
    const [translatedText, setTranslatedText] = useState('');
    const [audioFile, setAudioFile] = useState(null);

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleTranslate = async () => {
        setIsRecording(true);
        try {
            const response = await axios.post('http://127.0.0.1:5000/translate', {
                language: selectedLanguage
            });

            setIsRecording(false);

            const { translated_text, audio_file } = response.data;
            setTranslatedText(translated_text);
            setAudioFile(audio_file);
        } catch (error) {
            console.error('Translation failed:', error);
            setIsRecording(false);
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Voice Translator</h1>
            <label className="block mb-2">Select Language:</label>
            <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="w-full p-2 border rounded"
            >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="te">Telugu</option>
                <option value="hi">Hindi</option>
            </select>

            <button
                onClick={handleTranslate}
                className="mt-4 bg-blue-500 text-white p-2 rounded"
                disabled={isRecording}
            >
                {isRecording ? 'Recording...' : 'Translate'}
            </button>

            {translatedText && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Translated Text:</h2>
                    <p className="bg-gray-100 p-2 rounded">{translatedText}</p>
                </div>
            )}

            {audioFile && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Translated Audio:</h2>
                    <audio controls src={`http://127.0.0.1:5000${audioFile}`}></audio>
                </div>
            )}
        </div>
    );
};

export default TranslatorForm;
