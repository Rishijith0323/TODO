import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Add from './components/Add';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Add/>}/>
    <Route path="/Search" element={<Search/>}/>
    <Route path="/Viewall" element={<Viewall/>}/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
