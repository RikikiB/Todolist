import React from 'react';


function Todo(props) {
    return(
        <li className="Todo stack-small">
            <div className="c-cb">
            <input id={props.id} type="Checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)}/>
        <label className="TodoLabel" htmlFor={props.id}>
        {props.name}
        </label>
            </div>
            <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
        onClick={() => props.deleteTask(props.id)}
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
        </li>

    )
    
    }
    

export default Todo