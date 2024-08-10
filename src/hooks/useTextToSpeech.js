import { useEffect, useState } from 'react';

function useTextToSpeech() {
    const [synth, setSynth] = useState(null);

    useEffect(() => {
        if (window.speechSynthesis) {
            setSynth(window.speechSynthesis);
        } else {
            console.warn('Web Speech API is not supported in this browser.');
        }
    }, []);

    const speak = (sentence) => {
        if (synth && sentence) {
            const utterance = new SpeechSynthesisUtterance(sentence);
            synth.speak(utterance);
        }
    };

    return speak;
}

export default useTextToSpeech;
