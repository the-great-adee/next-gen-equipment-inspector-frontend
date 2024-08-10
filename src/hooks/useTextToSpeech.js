import { useEffect, useState } from 'react';

export default function useTextToSpeech() {
    const [synth, setSynth] = useState(null);

    useEffect(() => {
        if (window.speechSynthesis) {
            setSynth(window.speechSynthesis);
            // for (let voice of window.speechSynthesis.getVoices()) {
            //     console.log(voice.name);
            // }
        } else {
            console.warn('Web Speech API is not supported in this browser.');
        }
    }, []);

    const speak = (sentence, voiceName = 'Google UK English Female', pitch = 1, rate = 1) => {
        if (synth && sentence) {
            const utterance = new SpeechSynthesisUtterance(sentence);
            const selectedVoice = window.speechSynthesis.getVoices().find(voice => voice.name === voiceName);
            utterance.voice = selectedVoice;
            utterance.pitch = pitch;
            utterance.rate = 1.25;
            synth.speak(utterance);
        }
    };

    return speak;
}
