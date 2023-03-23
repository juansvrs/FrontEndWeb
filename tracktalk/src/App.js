import { Login } from './components/Login';
import {Navbar} from './components/Navbar';
import { About } from './components/About';
import { Lists } from './components/Lists';
import { Music } from './components/Music';
import { Login } from './components/Login';
import { Home } from './components/Login';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Music" element={<Music/>}/>
        <Route path="/Lists" element={<Lists/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
