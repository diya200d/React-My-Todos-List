import React from 'react'
// Means it is in same folder
import {TodoItem} from "./TodoItem";

const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"px auto "

  }
  return (
    <div className="container" style={myStyle}>
    <h3 className="my-3">Todos List</h3>
    {/* If-else */}
 {props.todos.length === 0 ? (
  <p>No todos to display</p>
) : (
  props.todos.map((todo) => (
    <React.Fragment key={todo.sno}>
      <TodoItem todo={todo} onDelete={props.onDelete} />
      <hr />
    </React.Fragment>
  ))
)}

    </div>
  )
}

export default Todos
