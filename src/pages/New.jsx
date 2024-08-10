import useSpeechToText from "react-hook-speech-to-text";
import { OutlinedButton } from "../components/Button";

import { vehicleConfig, legalCommands } from "../utils/commandHandler";
import ThreeDotLoader, { RedDot } from "../components/threeDotLoader";
import useTextToSpeech from "../hooks/useTextToSpeech";
import { useForm } from "react-hook-form";

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
  });
  const speak = useTextToSpeech();

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div className="min-h-96 grid grid-cols-2 px-4 py-4">
      <div className="p-1">
        {" "}
        <InspectionForm />
      </div>

      <div className="p-1">
        <h1>{isRecording ? <ThreeDotLoader /> : <RedDot />}</h1>
        <OutlinedButton
          clickHandler={isRecording ? stopSpeechToText : startSpeechToText}
        >
          {isRecording ? "Stop" : "Start"}
        </OutlinedButton>

        <ul>
          {results.map((result) => {
            // Example processing: splitting the transcript into words
            const commands = result.transcript
              .split(" ")
              .filter((word) => word !== "");
            console.log(commands);
            const className = legalCommands.includes(commands[0])
              ? "text-green-500"
              : "text-red-500";

            return (
              <li key={result.timestamp} className={className}>
                {result.transcript}
              </li>
            );
          })}
          {interimResult && <li>{interimResult}</li>}
        </ul>

        <OutlinedButton clickHandler={() => speak("Hello, World!")}>
          Speak
        </OutlinedButton>
      </div>
    </div>
  );
};

export default New;

const InspectionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full mx-auto p-4 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Truck Inspection Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Truck Serial Number */}
        <div className="mb-4">
          <label className="block text-gray-700">Truck Serial Number</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("truckSerialNumber", { required: true })}
            placeholder="Example 7301234, 730EJ73245"
          />
          {errors.truckSerialNumber && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Truck Model */}
        <div className="mb-4">
          <label className="block text-gray-700">Truck Model</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("truckModel", { required: true })}
            placeholder="Example 730, 730 EJ, 735, 745"
          />
          {errors.truckModel && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Inspection ID */}
        <div className="mb-4">
          <label className="block text-gray-700">Inspection ID</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("inspectionID", { required: true })}
            type="number"
            placeholder="Auto-incremented unique number"
          />
          {errors.inspectionID && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Inspector Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Inspector Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("inspectorName", { required: true })}
          />
          {errors.inspectorName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Inspection Employee ID */}
        <div className="mb-4">
          <label className="block text-gray-700">Inspection Employee ID</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("inspectionEmployeeID", { required: true })}
          />
          {errors.inspectionEmployeeID && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Date & Time of Inspection */}
        <div className="mb-4">
          <label className="block text-gray-700">
            Date & Time of Inspection
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("inspectionDateTime", { required: true })}
            type="datetime-local"
          />
          {errors.inspectionDateTime && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Location of Inspection */}
        <div className="mb-4">
          <label className="block text-gray-700">Location of Inspection</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("locationOfInspection", { required: true })}
          />
          {errors.locationOfInspection && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Geo Coordinates of Inspection */}
        <div className="mb-4">
          <label className="block text-gray-700">
            Geo Coordinates of Inspection (optional)
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("geoCoordinates")}
            placeholder="Latitude, Longitude"
          />
        </div>

        {/* Service Meter Hours */}
        <div className="mb-4">
          <label className="block text-gray-700">Service Meter Hours</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("serviceMeterHours", { required: true })}
            type="number"
          />
          {errors.serviceMeterHours && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Inspector Signature */}
        <div className="mb-4">
          <label className="block text-gray-700">Inspector Signature</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("inspectorSignature", { required: true })}
          />
          {errors.inspectorSignature && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Customer Name / Company Name */}
        <div className="mb-4">
          <label className="block text-gray-700">
            Customer Name / Company Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("customerName", { required: true })}
          />
          {errors.customerName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* CAT Customer ID */}
        <div className="mb-4">
          <label className="block text-gray-700">CAT Customer ID</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("catCustomerID", { required: true })}
          />
          {errors.catCustomerID && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
