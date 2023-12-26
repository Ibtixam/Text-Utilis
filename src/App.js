import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import Alert from './components/Alert';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  useEffect(() => {
    document.body.classList.add('body-light');
  }, []);

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background =
        'linear-gradient(41deg, rgba(128,128,128,1) 50%, rgba(0,0,0,1) 50%)';
      document.body.style.color = 'white';
      document.documentElement.classList.add('dark-mode');
      showAlert('Dark mode has been Enabled', 'success');
    } else {
      setmode('light');
      document.body.style.background =
        'linear-gradient(41deg, rgba(241,241,241,1) 50%, rgba(158,232,255,1) 50%)';
      document.body.style.color = 'black';
      document.documentElement.classList.remove('dark-mode');
      showAlert('Light mode has been Enabled', 'success');
    }
  };

  return (
    <React.Fragment>
      <Router>
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          title="TextUtilz"
          home="Home"
          about="About"
          contact="Contact Us"
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/home"
              element={
                <TextFrom
                  showAlert={showAlert}
                  mode={mode}
                  alert={alert}
                />
              }
            />
            <Route
              path="/"
              element={
                <TextFrom
                  showAlert={showAlert}
                  heading="Text Converter and Analysis"
                  mode={mode}
                  UpperCase="Convert UpperCase"
                  LowerCase="Convert LowerCase"
                  Clear="Clear Text"
                  Copy="Copy To Clipboard"
                  ExtraSpace="Remove Extra Spaces"
                  alert={alert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/contact" element={<Contact mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
