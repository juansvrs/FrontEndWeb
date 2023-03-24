import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { SignUp } from './components/SignUp';
import { Music } from './components/Music';
import { Home } from './components/Home';
import { About } from './components/About';


//* import { Lists } from './components/Lists';

/*
<Route path="/Home" element={<Home/>}/>
<Route path="/Lists" element={<Lists/>}/>

*/

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Music" element={<Music/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>      
        </Routes>
    </BrowserRouter>
  );
}

export default App;
