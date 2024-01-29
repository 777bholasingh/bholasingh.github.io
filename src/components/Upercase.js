import React from 'react'
import { useState } from 'react'
export default function Upercase(props) {
  

  // for converting the text pattern  usestate function is used

  const [text, setText] = useState("");



 const   handlechange= (event)=>{
     setText(event.target.value);
  
 };

const handleupclick= ()=> {

let newText=text.toUpperCase();
setText(newText);


};
const handleloclick= ()=> {

    let newText=text.toLowerCase();
    setText(newText);
    
    
    };

 const handlecopy =()=>{

  let text=document.getElementById("text_convert");
   text.select();
  navigator.clipboard.writeText(text.value);
 }  

  






  // creating object for stylling  in form of mystyle object
// var mystyle={
//  color:'red',
//  backgroundColor:'#dda15e'

//  }


//from where all usestate are used for dark theme utility

// using hooks for changing text in button
const[btntext,setbtnText]=useState('enable dark mode');


// usestate hook passing initilal variable mystyle as object
const[mystyle,setStyle]=useState({
  color:'white',
backgroundColor:'#dda15e',
});


// code for making dark theme

const togglestyle=()=>{
  if(mystyle.backgroundColor==='#dda15e'){
    let newstyle={
      color: 'red',
      backgroundColor:'black',
      border:'2px solid blue',
      width:'100vw'
   
       }
    setStyle(newstyle)
    setbtnText('enable light mode');
  }
  else{
  
    setStyle({
      color: 'white',
      backgroundColor:'#dda15e'
   
       })
       setbtnText('enable dark mode');
  }
}


  return (
    <>

  <div style={mystyle}>

<div className='container mb-3 my-4'>

<h1>{props.heading}</h1>
  <textarea className="form-control " id="text_convert" rows="10"  value={text} onChange={handlechange}></textarea>
  <button type="button" className="btn btn-primary mt-2 mx-2" onClick={handleupclick}>update_uptext</button>
  <button type="button" className="btn btn-primary mt-2 mx-2" onClick={handleloclick}>update_lotext</button>
  <button type="button" className="btn btn-primary mt-2 mx-2" onClick={handlecopy}>copytext</button>
 

</div>
<div className='container'>
    <h1>text summary</h1>
    <p>{text.split(" ").length} words,  {text.length} characters</p>

</div>
</div>
  {/* button for dark theme uttility */}
<button type="button" className="btn btn-success mt-2 mx-2" onClick={togglestyle}>{btntext}</button>
      
    </>
  )
}
