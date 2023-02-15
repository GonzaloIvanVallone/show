import './App.css';
import Home from "./components/Home";
import Timed from "./components/Timed"
import Button from "./components/Button"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes> 
          <Route exact path={'/'} element={<Home/>}/>
          <Route exact path={'/timed'} element={<Timed/>}/>
          <Route exact path={'/button'} element={<Button/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
