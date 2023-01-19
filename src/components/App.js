import React from "react";
import Sidebar from "../Sidebar";
import Chat from "../Chat";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";

function App() {
  // const [ user, setuser ] = useState(null);
  return (
    <div className="app">
      {/* {User ? (
        <h1>LOGIN</h1>
      ) : (

      ) } */}
      <div className="app_body">
        <Router>
          
            <Sidebar />
            <Routes>
            {/* <Route path="/rooms/:roomId" element={<Chat />}> */}
              
            {/* </Route> */}
            <Route path="/" element={<Chat />}>
              {/* <Chat /> */}
              
            </Route>
            
           
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

