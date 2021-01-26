import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import MainComponent from './components/MainComponent';

function App() {

  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect( ()=> {
    setName(prompt('Enter your name : '));
  }, []);

  const addMessage = (message)=> {
    setMessages([...messages, message]);
  }

  return (
    <div className="App">
      <h1>Welcome {name}</h1> 
      <MainComponent messages={messages} />
      <InputForm name={name} addMessage={addMessage} />
    </div>
  );
}

export default App;
