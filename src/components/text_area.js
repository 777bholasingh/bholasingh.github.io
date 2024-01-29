
// this react component is basically as like Upercase.js component 80%

import React from 'react'
import "./style.css"
import 'font-awesome/css/font-awesome.min.css';

import { useState } from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
export default function Darktheme(props) {
  
  // for converting the text pattern  usestate function is used
  

  const [text, setText] = useState("");
  const [pattern, setPattern] = useState("");



const handlePattern=(event)=>{
  setPattern(event.target.value);
}
 const   handlechange= (event)=>{
     setText(event.target.value);
  
 };

const handleupclick= ()=> {

let newText=text.toUpperCase();
setText(newText);
props.showAlert("updated to upper case","success");


};
const handleloclick= ()=> {

    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("updated to lower case","success");
    
    };

 const handlecopy =()=>{

    let text=document.getElementById("text_convert");
   text.select();
  navigator.clipboard.writeText(text.value);
  // envoking show alert function from app.js file
  props.showAlert("copied to clipboard","success");
 }  

  
 const handlereverse =()=>{
       
  let new_text=text.split(" ").reverse().join(" ");
  
    setText(new_text);
    if(text.split(" ").length>1){
      props.showAlert("text has been reversed ","success");
    }
    else if(text.split(" ").length<=1){
      props.showAlert("single word can not be reversed ","warning");
    }
 
 }
 
 
;



 const handleSearch=(event)=>{
  event.preventDefault(); 
      let index=text.indexOf(pattern);
   if(index!==-1){  
  let new_text=text.replace(pattern,"******");
  setText(new_text);
    props.showAlert("text has been find ","success");
   }
   else{
    props.showAlert("text has not been find ","warning");
   }

 };

 
const search_btn={

  cursor:pattern.length===0?"default":"pointer",
  backgroundColor:pattern.length===0?"grey":"#2196F3"
};

const settext_color={
color:props.mode==='black'?'rgb(52 188 100)':'black'
}



    
  return (
    <>
 {/* background color of whole darktheme file can be set differntly from navbar section using props.mode state */}
  <div className='container ' style={settext_color}>



<h1  className='py-2'>{props.heading}</h1>
<div className='container'>
  <textarea className="form-control " id="text_convert" rows="10"  value={text} onChange={handlechange}  ></textarea>
  <button disabled={text.length===0} type="button" className="btn btn-primary mt-2 mx-1" onClick={handleupclick}>update_uptext</button>
  <button disabled={text.length===0}  type="button" className="btn btn-primary mt-2 mx-2" onClick={handleloclick}>update_lotext</button>
  <button disabled={text.length===0}  type="button" className="btn btn-primary mt-2 mx-2" onClick={handlecopy}>copy_text</button>
  <button disabled={text.length===0}  type="button" className="btn btn-primary mt-2 mx-2" onClick={handlereverse}>reverse_text</button>
</div>
<div className='container mb-5 mt-4'>
    <form className="example" >
  <input type="text"   placeholder="Search.." value={pattern} onChange={handlePattern} className="inpt"/>
  <button type="submit" disabled={pattern.length===0}    style={search_btn}     onClick={handleSearch}><i className="fa fa-search"></i></button>
  </form>
</div>
<div className='container text_analyze' >
    <h1 >Text summary</h1>
    <p style={{color:props.mode==='black'?'#ebf158':'grey'}} >{text.split(" ").filter((element)=>{return element.length!==0?element.length:0}).length} words,  {text.length} characters</p>
    <h2 > Preview</h2>
    <p style={{color:props.mode==='black'?'#ebf158':'grey'}}>{text.length>0?text:'Nothing to preview'}</p>
</div>

</div>
 
      
    </>
  )
}
