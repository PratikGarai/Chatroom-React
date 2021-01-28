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
      .orderBy("timestamp", "desc")
      .onSnapshot( snapshot => {
          setMessages(snapshot.docs.map( doc => {
            const obj = doc.data()
            obj['id'] = doc.id;
            return obj;
          }));
      });

    setName(prompt('Enter your name : '));
  }, []);

  const addMessage = (message)=> {
    setMessages([...messages, message]);
  }

  return (
    <div className="App">
      <div className="header">
        <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt=""></img>
        <h2> React Chatroom App </h2>
        <h3>Welcome : {name}</h3> 
      </div>
      <MainComponent username={name} messages={messages} />
      <InputForm name={name} addMessage={addMessage} />
    </div>
  );
}

export default App;
