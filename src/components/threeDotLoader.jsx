const ThreeDotLoader = () => {
  const loaderStyle = {
    display: "flex",
    width: "max-content",
    alignItems: "center",
    justifyContent: "center",
  }

  const dotStyle = {
    width: "8px",
    height: "8px",
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

export function RedDot() {
  const redDotStyle = {
    width: "1rem",
    height: "1rem",
    padding: "0.5rem",
    backgroundColor: "red",
    borderRadius: "50%",
    display: "inline-block",
    textAlign: "center",
    fontSize: "0.8rem",
    color: "transparent",
  }

  return <span style={redDotStyle}>.</span>
}
