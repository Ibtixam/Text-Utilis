import React, { useState } from 'react';

export default function TextFrom(props) {
    
    const [text, setText] = useState("");
    
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
        if(newText === ""){
            props.showAlert("Please write anything to convert in uppercase...", "danger");
        }
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
        if(newText === ""){
            props.showAlert("Please write anything to Convert in lowercase...", "danger");
        }
    }
    
    const handleClear = () => {
        let newText = "";
        setText(newText);   
        props.showAlert("Text Cleared", "success");
    }
    
    const handleCopy = () => {
        let textarea = document.getElementById("exampleFormControlTextarea1").value;
        navigator.clipboard.writeText(textarea);
        props.showAlert("Copied to Clipboard", "success");
        if(textarea === ""){
            props.showAlert("Please write anything for copying text...", "danger");
        }
    }
    
    const handleRemoveExtraSpaces = () => {
        let newText = text.trim().replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Extra Spaces Removed", "success");
        if(newText === ""){
            props.showAlert("Please write anything for remove spaces...", "danger");
        }
    }

    return (
    <React.Fragment>
        <div className="container text-form" style={{marginTop: "50px"}}>
            <h1 className="text-center">{props.heading}</h1>
            <textarea className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" placeholder="Enter the text here" value={text}
             style={{backgroundColor: props.mode === "light" ? "white" : "lightgray"}}
            ></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpperCase}>{props.UpperCase}</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleLowerCase}>{props.LowerCase}</button>
            <button className="btn btn-danger mx-1 my-2" onClick={handleClear}>{props.Clear}</button>
            <button className="btn btn-success mx-1 my-2" onClick={handleCopy}>{props.Copy}</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleRemoveExtraSpaces}>{props.ExtraSpace}</button>
        </div>
        <div className="container my-4">
            <h1>Summary Of Your Text</h1>
            <p>Number of words: {text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</p>
            <p>Number of Charactors: {text.length}</p>
            <h3 className="text-center my-3">Preview Document</h3>
            <textarea readOnly={true} className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5" style={{backgroundColor: props.mode === "light" ? "white" : "lightgray", resize: "none"}} value={text
            }
            ></textarea>
        </div>
    </React.Fragment>
  )
}


