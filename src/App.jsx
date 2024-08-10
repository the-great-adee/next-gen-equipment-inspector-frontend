import { Routes, Route } from "react-router-dom"
import HeadNavBar from "./components/HeadNavBar"
import Contact from "./pages/Contact"
import New from "./pages/New"
import Records from "./pages/Records"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import SplashScreen from "./pages/SplashScreen"
import { useState, useEffect } from "react"
import "./hooks/printStyle.css"

const DisplayLoadingDuration = 3000

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Set a timeout to hide the splash screen after 1 second
    const timer = setTimeout(() => {
      setLoading(false)
    }, DisplayLoadingDuration)

    // Cleanup the timeout if the component is unmounted
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading && <SplashScreen />}
      {!loading && (
        <>
          <HeadNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/records" element={<Records />} />
            <Route path="/new" element={<New />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
