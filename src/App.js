import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      messages: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div>
      <div className="App">
        <img src="https://scontent.fjsr2-1.fna.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=DdlM7eZ5XFoAX8AIqSO&_nc_ht=scontent.fjsr2-1.fna&oh=f8bcf9fa2d1b347fae0d8d569d232560&oe=5F54BAB3"/>
        <h1>Messenger Clone using      
          <img className="app__image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"/>
          ,
          <img className="app__image" src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"/>
          and
          <img className="app__image" src="https://material-ui.com/static/logo.png"/>
          </h1>
        <h2>Welcome {username}</h2>
      </div>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />

          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
      </FlipMove>
      
    </div>
  );
}

export default App;
