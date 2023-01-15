import React from 'react'
import Sidebar from '../Sidebar';
import Chat from '../Chat';
import '../styles/App.css';


const App = () => {


  return (
    <div className='app'>
   {/* <h1>we create whats app</h1> */}
   <div className='app_body'>
    <Sidebar />
    <Chat />

   </div>
    </div>
 
  )
}


export default App;
