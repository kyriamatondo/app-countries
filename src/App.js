
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';

function App() {
  return (
   <BrowserRouter>
   <Navigation/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
    <Route path="*" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
