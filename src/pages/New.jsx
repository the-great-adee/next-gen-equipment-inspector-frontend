import useSpeechToText from "react-hook-speech-to-text"
import { OutlinedButton } from "../components/Button"

import { vehicleConfig, legalCommands } from "../utils/commandHandler"
import ThreeDotLoader, { RedDot } from "../components/threeDotLoader"

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

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>
  return (
    <div className="min-h-96 px-4 py-4">
      <RedDot />
      <h1>{isRecording ? <ThreeDotLoader /> : <redDot />}</h1>
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
    </div>
  )
}

export default New
