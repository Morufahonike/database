import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Event from './components/event/Events'
import Navbar from "./compo/navbar/Navbar";
import Talent from "./components/talents/Talent";


function App() {
  

  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Event />} />
       <Route path="/talent" element={<Talent />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
