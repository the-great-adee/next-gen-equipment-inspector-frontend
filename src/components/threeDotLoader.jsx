const ThreeDotLoader = () => {
  const loaderStyle = {
    display: "flex",
    width: "max-content",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 0 1rem 0",
  }

  const dotStyle = {
    width: "1.5rem",
    height: "1.5rem",
    margin: "0 4px",
    backgroundColor: "#333",
    borderRadius: "50%",
    animation: "dot-blink 1.2s infinite",
  }

  return (
    <div style={loaderStyle}>
      <div style={{ ...dotStyle, animationDelay: "0s" }}></div>
      <div style={{ ...dotStyle, animationDelay: "0.2s" }}></div>
      <div style={{ ...dotStyle, animationDelay: "0.4s" }}></div>
      <style>{`
        @keyframes dot-blink {
          0%, 80%, 100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default ThreeDotLoader
