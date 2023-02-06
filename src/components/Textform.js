import React, { useState } from 'react'
import Alert from './Alert'
export default function Textform(props) {
    const [text,setText] = useState ('Enter your text  to convert it to Upper Case' );
   
    const handleUpClick =()=> 
    {
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
       props.showAlert("upperclick was clicked", "SUCCESS")
        
    }

    const handleloClick =()=> 
    {
        console.log("Upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("lower case was clicked","SUCCESS");
    }

    const handleclearClick =()=> 
    {
        console.log("Upper case was clicked");
        let newText = '';
        setText(newText);
    }



    const handleOnChange = (event) => {
        console.log('converted');
        setText(event.target.value)

    }
  return (

  

<div className="container mb-3" style={{color:props.mode==='dark'?'white':'light'}}>
    <h3> {props.heading} </h3>
    <textarea className="form-control" value ={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} color={props.mode==='dark'?'white':'light'} id="textbox" rows="7"></textarea>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Click to upperCase</button>

  <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>clear text</button>


  <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleloClick}>Click to lower Case</button>

  <div className='container' style={{color:props.mode==='dark'?'white':'light'}}>
    <p>number of characters is {text.length} and number of words are {text.split(" ").length } </p>
  </div>


</div>
    
  );
}
