import React, { useState } from 'react';
import Swal from 'sweetalert2';

const TextFrom = ({ showAlert, mode, ...props }) => {
  const [text, setText] = useState('');

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (!newText) {
      Swal.fire({
        title: 'Error!',
        text: 'Please write anything to convert uppercase',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    } else {
      showAlert('Converted to UpperCase', 'success');
    }
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (!newText) {
      Swal.fire({
        title: 'Error!',
        text: 'Please write anything to convert lowercase',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    } else {
      showAlert('Converted to LowerCase', 'success');
    }
  };

  const handleClear = () => {
    setText('');
    showAlert('Text Cleared', 'success');
  };

  const handleCopy = () => {
    let textarea = document.getElementById('exampleFormControlTextarea1').value;
    navigator.clipboard.writeText(textarea);
    if (!textarea) {
      Swal.fire({
        title: 'Error!',
        text: 'Please write anything to copying text...',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    } else {
      showAlert('Copied to Clipboard', 'success');
    }
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.trim().replace(/\s+/g, ' ');
    setText(newText);
    if (!newText) {
      Swal.fire({
        title: 'Error!',
        text: 'Please write anything to remove spaces...',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    } else {
      showAlert('Extra Spaces Removed', 'success');
    }
  };

  const handleTextToSpeech = () => {
    let textarea = document.getElementById('exampleFormControlTextarea1').value;
    const utterance = new SpeechSynthesisUtterance(textarea);
    speechSynthesis.speak(utterance);
    if (!text) {
      Swal.fire({
        title: 'Error!',
        text: 'Please write anything to speak the speech...',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  return (
    <React.Fragment>
      <div className="container text-form" style={{ marginTop: '50px' }}>
        <h1 className="text-center">{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={({ target }) => setText(target.value)}
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Enter the text here"
          value={text}
          style={{
            backgroundColor: mode === 'light' ? 'white' : 'lightgray',
          }}
        ></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpperCase}>
          {props.UpperCase}
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLowerCase}>
          {props.LowerCase}
        </button>
        <button className="btn btn-danger mx-1 my-2" onClick={handleClear}>
          {props.Clear}
        </button>
        <button className="btn btn-success mx-1 my-2" onClick={handleCopy}>
          {props.Copy}
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleRemoveExtraSpaces}
        >
          {props.ExtraSpace}
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleTextToSpeech}
        >
          Listen Text
        </button>
      </div>
      <div className="container my-4">
        <h1>Summary Of Your Text</h1>
        <p>
          Number of words:{' '}
          {text.trim() === '' ? 0 : text.trim().split(/\s+/).length}
        </p>
        <p>Number of Charactors: {text.length}</p>
        <h3 className="text-center my-3">Preview Document</h3>
        <textarea
          readOnly={true}
          className="form-control"
          onChange={({ target }) => setText(target.value)}
          id="exampleFormControlTextarea1"
          rows="5"
          style={{
            backgroundColor: mode === 'light' ? 'white' : 'lightgray',
            resize: 'none',
          }}
          value={text}
        ></textarea>
      </div>
    </React.Fragment>
  );
};

export default TextFrom;
