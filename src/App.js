import NavBar from "./components/Nav/NavBar";
import './style/NavBar.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Screen/Home";
import Characters from "./components/Screen/Characters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character' element={<Characters />} />
      </Routes>
  </div>
  );
}

export default App;
