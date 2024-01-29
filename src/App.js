import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import Darktheme from './components/text_area';
 import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode,setMode]=useState('light');
  
const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
 
  
  setAlert({
     msg:message,
     type:type
  });
  setTimeout(()=>{
    setAlert(null);

  },2000);
  
     };

const changeswitch_Text=()=>{

      let switchtext=document.querySelector(".text_set");
      if(mode==='light')
      switchtext.innerHTML="Disable Darkmode";
    else
    switchtext.innerHTML="Enable Darkmode";
  
   }


const togglemode=()=>{

if(mode==='light'){


 changeswitch_Text();
  setMode('black');
  document.body.style.backgroundColor="black";
  showAlert("Dark mode enabled!","warning");
  

}
else
{   changeswitch_Text();
  setMode('light');
  document.body.style.backgroundColor="white";
  showAlert("Light mode enabled","success");
 

}


};

// alert mode code



  return (
   <>




   

   {/*    //react function based component which is imported from Navbar.js file,infact this file is react component */}
   {/*  comment down for interpretoing what is going on
   // rendoring a react component multiple time
       */}
     <Router>


     <Navbar title="TextUtilities" about="About"  mode={mode} togglemode={togglemode} /> 
  <Alert  alert={alert}  />
<div className='my-2'>
  <Routes>
 <Route path="/" element={<Darktheme  heading="Enter your text" mode={mode} alert={alert} showAlert={showAlert} />} />
 <Route path="/about" element={<About mode={mode} />} />
  </Routes>

</div>




     </Router>

   </>
  );
}

export default App;



