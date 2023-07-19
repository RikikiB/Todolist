import React from 'react';


function Todo(props) {
    return(
        <li className="Todo stack-small">
            <div className="c-cb">
            <input id="todo-0" type="Checkbox" defaultChecked={props.completed} />
        <label className="TodoLabel" htmlFor="Todo-0">
        {props.name}
        </label>
            </div>
            <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
        </li>
    
    )
    }


export default Todo