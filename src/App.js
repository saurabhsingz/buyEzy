import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Navbar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
