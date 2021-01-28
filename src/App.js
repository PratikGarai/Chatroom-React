import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import MainComponent from './components/MainComponent';

import db from './firebase';

import './css/App.css';

function App() {

  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect( ()=> {
    db
      .collection('messages')
      .orderBy("timestamp", "asc")
      .onSnapshot( snapshot => {
          setMessages(snapshot.docs.map( doc => doc.data()));
      });

    setName(prompt('Enter your name : '));
  }, []);

  const addMessage = (message)=> {
    setMessages([...messages, message]);
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=150&h=150"></img>
      <h1>React Chatroom App </h1>
      <span className="name-tag">Welcome {name}</span> 
      <MainComponent username={name} messages={messages} />
      <InputForm name={name} addMessage={addMessage} />
    </div>
  );
}

export default App;
