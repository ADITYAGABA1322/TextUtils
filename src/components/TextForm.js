import React ,{useState}from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
 let newtxt=text.toUpperCase();
    setText(newtxt);
    props.showAlert("Converted To UpperCase","success");
  }
  const handleLowClick=()=>{
 let newtxt=text.toLowerCase();
    setText(newtxt);
    props.showAlert("Converted To LowerCase","success");
  }
  const handleClearClick=()=>{
 let newtxt='';
    setText(newtxt);
    props.showAlert("Text Cleared","success");
  }
  const handleOnChange=(event)=>{
       setText(event.target.value);
  }
  const handleCopy=()=>{
    var text =document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied To Clipboard","success");
  }
  const handleExtraSpaces=()=>{
 let newText=text.split(/[ ]+/)
 setText(newText.join(" "));
 props.showAlert("Removed Extra Spaces","success");
  }
  const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
 <h1>{props.heading}</h1>
   <div className="mb-3">
     <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#451e4d':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" value={text} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
 </div>
  <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length}Minutes require to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
    </>

  )
}
