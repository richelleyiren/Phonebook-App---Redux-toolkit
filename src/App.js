import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewContact from "./components/NewContact";
import Favorites from "./components/Favorites";
import AllContacts from "./components/AllContacts";
import Nav from "./components/Nav";
import Edit from "./components/Edit";


function App() {
 
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<NewContact />} />
          <Route path="/contacts" element={<AllContacts/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/edit" element={<Edit/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
