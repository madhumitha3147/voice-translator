import React, { useState } from "react";
import axios from "axios";

const TranslatorForm = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    const [isRecording, setIsRecording] = useState(false);
    const [translatedText, setTranslatedText] = useState("");
    const [audioFile, setAudioFile] = useState(null);

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleTranslate = async () => {
        setIsRecording(true);
        try {
            const response = await axios.post("http://127.0.0.1:5000/translate", {
                language: selectedLanguage,
            });

            setIsRecording(false);

            const { translated_text, audio_file } = response.data;
            setTranslatedText(translated_text);
            setAudioFile(audio_file);
        } catch (error) {
            console.error("Translation failed:", error);
            setIsRecording(false);
        }
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: `url('/voice.png')`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="p-6 max-w-lg w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg text-white border border-gray-300">
                <h1 className="text-2xl font-bold text-center mb-4">🔊 Voice Translator</h1>

                <div className="mb-4">
                    <label className="block mb-2 font-semibold">🌍 Select Language:</label>
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="w-full p-3 border border-gray-300 bg-gray-800 bg-opacity-50 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="te">Telugu</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>

                <button
                    onClick={handleTranslate}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
                    disabled={isRecording}
                >
                    {isRecording ? "🎙️ Recording..." : "🎤 Start Translation"}
                </button>

                {translatedText && (
                    <div className="mt-4 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-500">
                        <h2 className="text-lg font-semibold">📜 Translated Text:</h2>
                        <p className="mt-2 p-2 bg-gray-700 rounded">{translatedText}</p>
                    </div>
                )}

                {audioFile && (
                    <div className="mt-4 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-500">
                        <h2 className="text-lg font-semibold">🎵 Translated Audio:</h2>
                        <audio controls className="mt-2 w-full">
                            <source src={`http://127.0.0.1:5000${audioFile}`} type="audio/mp3" />
                        </audio>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TranslatorForm;
