import React from 'react';
import InputForm from './components/InputForm';
import MainComponent from './components/MainComponent';

function App() {

  const componentRef = {
    messages : [],
    setMessages : null
  };

  return (
    <div className="App">
      <MainComponent componentRef={componentRef} />
      <InputForm componentRef={componentRef} />
    </div>
  );
}

export default App;
