import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import MainComponent from './components/MainComponent';

function App() {

  const sampleData = [
    { name : "User 1", message : "Message 1" },
    { name : "User 2", message : "Message 2" },
  ]

  const [name, setName] = useState("");
  const [messages, setMessages] = useState(sampleData);

  useEffect( ()=> {
    setName(prompt('Enter your name : '));
  }, []);

  const addMessage = (message)=> {
    setMessages([...messages, message]);
  }

  return (
    <div className="App">
      <h1>Welcome {name}</h1> 
      <MainComponent username={name} messages={messages} />
      <InputForm name={name} addMessage={addMessage} />
    </div>
  );
}

export default App;
