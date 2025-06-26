
import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
import Footer from "./MyComponents/Footer"
import AddTodo from "./MyComponents/AddTodo"
import About from "./MyComponents/About"
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,  // <-- Add this
  Route,
  Link
} from "react-router-dom"


function App() {
  let initTodo;
  // get item returns null
  if(localStorage.getItem("todos")===null){
   initTodo=[];
  }
  else{
    // set init to to
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }
 
 const onDelete =(todo)=>{
   console.log("I am on delete of todo",todo)
  //  Deleteing this way in react doesnt works use setTodos
  //  let index=todo.indexOf(todo);
  //  todos.splice(index,1);

  //  filter is higher order method for array
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
    console.log("I am adding ths to do ",title,desc)
    let sno;
    if(todos.length==0){
      sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
     const myTodo = {
    sno: sno,
    title: title,
    desc: desc
  };

  console.log(myTodo);
  setTodos([...todos, myTodo]);
};

  // set todos is a func which updates todo
const [todos, setTodos] = useState([]);

// Load todos once when component mounts
useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos) {
    setTodos(savedTodos);
  }
}, []);

// Save todos to localStorage whenever todos state changes
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  

  return (
    <Router>
      <Header title="My Todos List" searchBar={false} />


      <Routes>
        <Route path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;