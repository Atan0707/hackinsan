import { useEffect, useState } from "react";

let recognition = null;
if ("webkitSpeechRecognition" in window) {
  recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}

const useSpeechRecognition = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!recognition) return;

    const handleResult = (event) => {
      console.log("onresult event: ", event);
      const transcriptArray = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setText(transcriptArray);
      recognition.stop();
      setIsListening(false);
    };

    recognition.onresult = handleResult;

    return () => {
      recognition.onresult = null;
    };
  }, [recognition]);

  const startListening = () => {
    setText("");
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;
