import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import { Button, FormControl,InputLabel,Input,} from '@material-ui/core';


function App() {
  // initial our todos array
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{ 
      setTodos(snapshot.docs.map(doc=>doc.data().todo)) 
    }) 
    
  }, [])

  const addTodo =(event)=>{
    //ignore keyboard event when data is entered
    event.preventDefault();
    if(!input){
  
    }
    else{
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
    }
    }
 
  return (
   <div className="App">
      <h1>Todo List App</h1>
      <form> 
          
          <FormControl>
              <InputLabel>Todo's</InputLabel>
              <Input value={input} onChange={event=>setInput(event.target.value)}></Input>
          </FormControl>
          <Button type="submit" onClick={addTodo} variant="contained" color="primary">Add todo</Button> 
          <ul>
            {todos.map(todo=>(<Todo text = {todo}></Todo>))}
          </ul>
      </form>
     
     
    </div>
  );
}

export default App;
