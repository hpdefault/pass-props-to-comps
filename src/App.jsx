import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
        </Routes>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
