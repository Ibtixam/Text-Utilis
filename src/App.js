import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import Alert from './components/Alert';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const storedMode = localStorage.getItem('theme');
  const [mode, setmode] = useState(storedMode);
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
    if (mode === 'light') {
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.style.color = 'white';
      document.body.style.background =
        'linear-gradient(41deg, rgba(128,128,128,1) 50%, rgba(0,0,0,1) 50%)';
    }
  }, [mode]);

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      showAlert('Dark mode has been Enabled', 'success');
      localStorage.setItem('theme', 'dark');
    } else {
      setmode('light');
      showAlert('Light mode has been Enabled', 'success');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/home"
              element={
                <TextFrom showAlert={showAlert} mode={mode} alert={alert} />
              }
            />
            <Route
              path="/"
              element={
                <TextFrom showAlert={showAlert} mode={mode} alert={alert} />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/contact" element={<Contact mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
