import React from 'react'
import "./style.css"
import {GrLinkedin} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import { SiGmail } from "react-icons/si";

function About(props) {



    
    
    


  return(
    <>
     <div id='about' >

<h1 style={{color:props.mode==='black'?'rgb(52 188 100)':'black'}} >About Us</h1>
<p style={{color:props.mode==='black'?'#ebf158':'black'}}>Welcome to my Website, your go-to destination for powerful text utilities.
  I am passionate about simplifying and enhancing your text-related tasks, providing a suite of tools designed to streamline your workflow.
  My aim to make your text-related activities seamless and enjoyable.</p>

<h1 style={{color:props.mode==='black'?'rgb(52 188 100)':'black'}}>Key Features</h1>
<ul style={{color:props.mode==='black'?'#ebf158':'black'}}>
  <li><h6>Fast and secure</h6> :Perform text operations quickly and with the assurance that your data is handled with utmost care.</li>
  <li><h6>Case conversion</h6> :Convert text to uppercase, lowercase with a single click.</li>
  <li><h6>Character count</h6> :Get precise character and word counts for your text.</li>
  <li><h6>User-friendly:</h6> :you can achieve your tasks effortlessly with ease of use.</li>

</ul>
<h1 style={{color:props.mode==='black'?'rgb(52 188 100)':'black'}}>Contact us</h1>
<p style={{color:props.mode==='black'?'#ebf158':'black'}}>Become a part of the  community! Connect with me on social media to stay updated on the latest features, tips, and tricks.<br/>
   Share your experiences and let us know how we can better serve you.Have questions or suggestions?.
    We'd love to hear from you! Reach out to me.</p>
   <div className='icons' style={{backgroundColor:props.mode==='black'?'rgb(52 188 100)':'white'}}> <a href='https://www.linkedin.com/in/bhola-singh-b39a4a234'> <GrLinkedin color='blue' size={50} className='ms-2'  /> </a> 
    <a  href='https://github.com/777bholasingh'>  <BsGithub color='black' size={50} className='ms-2'/>  </a>
    <a  href='https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com'>  <SiGmail color='black' size={50} className='ms-2'/>  </a>
    </div>
   </div>
</>

  )
};

export default About;

