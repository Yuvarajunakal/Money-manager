import './App.css';
import Header from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monthly from './pages/Monthly';
import Weekly from './pages/Weekly';
import Yearly from './pages/Yearly';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/monthly" element={<Monthly/>}/>
        <Route path="/weekly" element={<Weekly/>}/>
        <Route path="/yearly" element={<Yearly/>}/>
      
      
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
