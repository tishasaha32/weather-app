import React, { useState, useEffect } from "react";
let speech;
if (window.webkitSpeechRecognition) {
  // eslint-disable-next-line
  const SpeechRecognition = window.webkitSpeechRecognition;
  speech = new SpeechRecognition();
  speech.continuous = true;
} else {
  speech = null;
}
function useVoice() {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const listen = () => {
    setIsListening(!isListening);
    if (isListening) {
      speech.stop();
    } else {
      speech.start();
    }
  };
  useEffect(() => {
    //handle if the browser does not support the Speech API
    if (!speech) {
      return;
    }
    speech.onresult = (event) => {
      setText(event.results[event.results.length - 1][0].transcript);
    };
  }, []);

  //   useEffect(() => {
  //     console.log(text);
  //   }, [text]);
  return {
    text,
    isListening,
    listen,
    voiceSupported: speech !== null,
    setText,
  };
}

export default useVoice;
