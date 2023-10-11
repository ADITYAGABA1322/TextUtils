import './App.css';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  const toggleMode=()=>{
     if(mode==='light'){
  setmode('dark')
  document.body.style.backgroundColor='#451e4d';
  showAlert("Dark mode has been enabled","success");
}
else {setmode('light');
showAlert("Light mode has been enabled","success");
document.body.style.backgroundColor='white';
}
  }
  return (
  <>
  <Router>

  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/>
  <div className='container my-3'> 
  <Routes>
          <Route exact path="/"  element={ <TextForm  showAlert={showAlert} 
          mode={mode} heading="Enter the text to analyze below" /> }/>
          <Route exact path="/about"  element={<AboutUs/>}/>
   </Routes>
  
  </div>

  </Router>

  </>
  );
}

export default App;
