import React, { useState } from 'react';
import InputForm from './components/InputForm';
import MainComponent from './components/MainComponent';

function App() {

  const [name, setName] = useState("Pratik");

  const componentRef = {
    messages : [],
    setMessages : null
  };

  return (
    <div className="App">
      <MainComponent componentRef={componentRef} />
      <InputForm name={name} componentRef={componentRef} />
    </div>
  );
}

export default App;
