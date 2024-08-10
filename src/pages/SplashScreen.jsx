import CaterpilotLogo from "../assets/caterpilot.png"

const SplashScreen = () => {
  const splashStyle = {
    backgroundColor: "#fff",
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999, // Ensure it's on top
  }

  return (
    <div style={splashStyle}>
      <img src={CaterpilotLogo} alt="CaterPilot Logo" />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white py-4">
        CaterPilot
      </h1>

      <p className="text-2xl font-semibold text-gray-600">
        Made with &lt;3 by Caterpillar for Caterpillar
      </p>
    </div>
  )
}

export default SplashScreen
