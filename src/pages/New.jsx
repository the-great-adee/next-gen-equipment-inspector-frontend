import useSpeechToText from "react-hook-speech-to-text"
import { OutlinedButton } from "../components/Button"

import { vehicleConfig, legalCommands } from "../utils/commandHandler"
import ThreeDotLoader, { RedDot } from "../components/threeDotLoader"
import useTextToSpeech from "../hooks/useTextToSpeech"

const New = () => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  })
  const speak = useTextToSpeech()

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>

  return (
    <div className="min-h-96 px-4 py-4">
      <h1>{isRecording ? <ThreeDotLoader /> : <RedDot />}</h1>
      <OutlinedButton clickHandler={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? "Stop" : "Start"}
      </OutlinedButton>

      <ul>
        {results.map((result) => {
          // Example processing: splitting the transcript into words
          const commands = result.transcript.split(" ").filter((word) => word !== "")
          console.log(commands)
          const className = legalCommands.includes(commands[0])
            ? "text-green-500"
            : "text-red-500"

          return (
            <li key={result.timestamp} className={className}>
              {result.transcript}
            </li>
          )
        })}
        {interimResult && <li>{interimResult}</li>}
      </ul>

      <OutlinedButton clickHandler={() => speak("Hello, World!")}>Speak</OutlinedButton>
    </div>
  )
}

export default New
