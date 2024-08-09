
import { Routes, Route } from 'react-router-dom';
import HeadNavBar from './components/HeadNavBar';
import Contact from './pages/Contact';
import New from './pages/New';
import Records from './pages/Records';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import Registration from './pages/Registration';



const App = () => {
  return (
    <div>
      <HeadNavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
          <Route path="/new" element={<New />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
