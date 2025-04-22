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
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //background: "linear-gradient(to bottom right, #d8f3dc, #fcd5ce, #dee2ff)",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    padding: "3.5rem",
                    borderRadius: "1.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "#fff",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                }}
            >
                <div
                    style={{
                        border: "2px solid #fff",
                        borderRadius: "12px",
                        padding: "12px 20px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        margin: "0 auto 20px auto",
                        width: "fit-content",
                    }}
                >
                    <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>
                        🌐 Voice Translator
                    </h1>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "1.1rem", fontWeight: "600" }}>
                        🌍 Choose Language
                    </label>
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        style={{
                            width: "100%",
                            padding: "0.75rem",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            color: "white",
                            borderRadius: "0.5rem",
                            border: "1px solid gray",
                            outline: "none",
                        }}
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
                    disabled={isRecording}
                    style={{
                        width: "100%",
                        padding: "0.75rem",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        borderRadius: "0.5rem",
                        backgroundColor: isRecording ? "#6b7280" : "#06b6d4",
                        cursor: isRecording ? "not-allowed" : "pointer",
                        color: "#fff",
                        transition: "background-color 0.3s ease",
                        border: "none",
                    }}
                >
                    {isRecording ? "🎙️ Recording..." : "🎤 Start Translation"}
                </button>

                {translatedText && (
                    <div style={{ marginTop: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "1rem", borderRadius: "0.5rem", border: "1px solid #4b5563" }}>
                        <h2 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem" }}>📜 Translated Text</h2>
                        <p style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "0.75rem", borderRadius: "0.5rem", color: "white" }}>{translatedText}</p>
                    </div>
                )}

                {audioFile && (
                    <div style={{ marginTop: "1rem", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "1rem", borderRadius: "0.5rem", border: "1px solid #4b5563" }}>
                        <h2 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem" }}>🎵 Translated Audio</h2>
                        <audio controls style={{ width: "100%" }}>
                            <source src={`http://127.0.0.1:5000${audioFile}`} type="audio/mp3" />
                        </audio>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TranslatorForm;
