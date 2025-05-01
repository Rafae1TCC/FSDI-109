import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Home from './components/Home/Home';
import BackgroundWithContent from './components/Background/BackgroundWithContent';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './components/Admin/Admin';
import GlobalProvider from './components/GlobalProvider/GlobalProvider';
import Cart from './pages/Cart/Cart';

function App() {
  const balatroConfig = {
    isRotate: false,
    mouseInteraction: false,
    pixelFilter: 700,
    color1: "#DE443B",
    color2: "#006BB4",
    color3: "#162325",
    contrast: 3.5,
    lighting: 0.4
  };

  return (
    <GlobalProvider>
      <BrowserRouter>

        <BackgroundWithContent 
          balatroProps={balatroConfig}
          containerClass="app-container"
          contentClass="app-content"
          >

          <Navbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/catalog" element={<Catalog />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/admin" element={<Admin />}/>
              <Route path="/cart" element={<Cart />}/>
            </Routes>
          </main>

          <Footer />

        </BackgroundWithContent>

      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;