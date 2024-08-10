import useSpeechToText from "react-hook-speech-to-text";
import { OutlinedButton2 } from "../components/Button";
import { vehicleConfig, legalCommands } from "../utils/commandHandler";
import ThreeDotLoader from "../components/threeDotLoader";
import useTextToSpeech from "../hooks/useTextToSpeech";
import { useForm } from "react-hook-form";
import microphone from "../assets/microphone.png";
import { useEffect } from "react";
import usePrintToPDF from "../hooks/usePrintToPdf";
import "../hooks/printStyle.css";

const New = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
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

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // Mapping of voice commands to form fields
  const commandMapping = {
    "set truck number": "truckSerialNumber",
    "set serial number": "truckSerialNumber",
    "set track number": "truckSerialNumber",
    "set truck model": "truckModel",
    "set track model": "truckModel",
    // "set inspection id": "inspectionID",
    // "set infection id": "inspectionID",
    "set inspector name": "inspectorName",
    "set infection name": "inspectorName",
    "set inspection name": "inspectorName",
    "set inspection location": "locationOfInspection",
    "set inspection coords": "geoCoordinates",
    "set metre hours": "serviceMeterHours",
    "set metre duration": "serviceMeterHours",
    "set the duration": "serviceMeterHours",
    "set minute hours": "serviceMeterHours",
    "set Odometer reading": "serviceMeterHours",
    "set customer signature": "inspectorSignature",
    "set company name": "customerName",
    "set customer name": "customerName",
    "set customer id": "catCustomerID",
    "Form is done": "submit",
    "submit the form": "submit",
    "ok submit it": "submit",
    "okay submit it": "submit",
    "ok it's done": "submit",
    "okay submit it": "submit",
  };
  useEffect(() => {
    if (results.length > 0) {
      results.forEach((result) => {
        const commands = result.transcript
          .toLowerCase()
          .split(" ")
          .filter((word) => word !== "");

        // Extract command key and value
        if (commands.length > 1) {
          const commandKey = commands.slice(0, 3).join(" "); // Extract the command
          const value = commands.slice(3).join(" "); // Extract the value
          console.log("Command key : ", commandKey);
          console.log("Value : ", value);

          if (commandMapping[commandKey]) {
            setValue(commandMapping[commandKey], value);
          }
        }
      });
    }
  }, [results, setValue]);

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div className="min-h-96 grid grid-cols-2 gap-2 px-4 py-4">
      <div className="p-1 overflow-y-scroll overflow-hidden max-h-full">
        <InspectionForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
      </div>

      <div className="p-1">
        <div className="flex justify-center flex-col rounded-lg items-center w-full py-3 pt-5 px-2">
          <div
            className="w-fit z-20 cursor-pointer hover:scale-[97%] active:scale-95 transition-all duration-300"
            onClick={isRecording ? stopSpeechToText : startSpeechToText}
          >
            {isRecording ? (
              <div className="relative flex items-center flex-col justify-center space-y-4">
                <div className="animate-pulse relative bg-red-100 w-48 aspect-square px-8 mx-auto rounded-full flex justify-center items-center my-auto">
                  <img
                    className="size-24 z-50 cursor-pointer"
                    src={microphone}
                  />
                </div>
                <ThreeDotLoader />
              </div>
            ) : (
              <div className="relative flex items-center flex-col justify-center space-y-4">
                <div className=" w-48 aspect-square px-8 mx-auto rounded-full flex justify-center items-center my-auto">
                  <img
                    className="size-24 z-50 cursor-pointer"
                    src={microphone}
                  />
                </div>
                <div className="opacity-0">
                  <ThreeDotLoader />
                </div>
              </div>
            )}
          </div>
          <div>
            <ul>
              {results.length > 0 &&
                (() => {
                  const lastResult = results[results.length - 1];
                  const className = legalCommands.includes(
                    lastResult.transcript.split(" ")[0]
                  )
                    ? "text-green-500"
                    : "text-red-500";
                  return (
                    <li
                      key={lastResult.timestamp}
                      className={className + "font-bold text-xl"}
                    >
                      {lastResult.transcript}
                    </li>
                  );
                })()}
              {interimResult && <li>{interimResult}</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

const InspectionForm = ({ register, handleSubmit, onSubmit, errors }) => {
  const { sectionRef, printToPDF } = usePrintToPDF("FJ548");

  return (
    <div className="w-full mx-auto p-4 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Truck Inspection Form</h2>
      <form ref={sectionRef} onSubmit={handleSubmit(onSubmit)}>
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
        {/* <div className="mb-4">
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
        </div> */}

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
        {/* <div className="mb-4">
          <label className="block text-gray-700">Inspection Employee ID</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("inspectionEmployeeID", { required: true })}
          />
          {errors.inspectionEmployeeID && (
            <span className="text-red-500">This field is required</span>
          )}
        </div> */}

        {/* Date & Time of Inspection */}
        {/* <div className="mb-4">
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
        </div> */}

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
        {/* <div className="mb-4">
          <label className="block text-gray-700">
            Geo Coordinates of Inspection (optional)
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("geoCoordinates")}
            placeholder="Latitude, Longitude"
          />
        </div> */}

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
        {/* <div className="mb-4">
          <label className="block text-gray-700">Inspector Signature</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("inspectorSignature", { required: true })}
          />
          {errors.inspectorSignature && (
            <span className="text-red-500">This field is required</span>
          )}
        </div> */}

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
      </form>

      <div className="flex justify-around my-4">
        <button
          type="submit"
          className="w-32 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>

        <OutlinedButton2 className="w-32" clickHandler={printToPDF}>
          Print
        </OutlinedButton2>
      </div>
    </div>
  );
};
