
import { Routes, Route } from 'react-router-dom';
import HeadNavBar from './components/HeadNavBar';
import Contact from './pages/Contact';
import New from './pages/New';
import Records from './pages/Records';
import Home from './pages/Home';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='min-h-full h-fit overflow-y-scroll pt-20 overflow-hidden'>
      <HeadNavBar/>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
          <Route path="/new" element={<New />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
