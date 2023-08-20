import logo from './logov1.png';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from './components/Navbar.js'
import Home from './pages/Home'
import Offer from './pages/Offer.js'
import Gallery from './pages/Gallery.js'
import Contact from './pages/Contact.js'
import Footer from './components/Footer.js'

const AppLayout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AppLayout/>}>

          <Route index element={<Home/>}/>
          <Route exact path="/oferta" element={<Offer/>}/>
          <Route exact path="/galeria" element={<Gallery/>}/>
          <Route exact path="/kontakt" element={<Contact/>}/>

        </Route>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
