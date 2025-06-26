// TodoItem.js
import React from 'react';
// destuctoring (todo, delete)
export const TodoItem = ({ todo,onDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      {/* Here we are passing the function not calling directly */}
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>


      
    </div>
  );
};
