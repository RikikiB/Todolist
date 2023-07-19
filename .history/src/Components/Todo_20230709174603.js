import React from 'react';


function Todo(props) {
    return(
        <li className="Todo stack-small">
            <div className="c-cb">
            <input id="Todo0" type="Checkbox" defaultChecked={props.completed} />
        <label className="TodoLabel" htmlFor="Todo0">
        {props.name}
        </label>
            </div>
            <div className="btn-Group">
        <button type="Button" className="Btn">
          Edit <span className="Visually-Hidden">{props.name}</span>
        </button>
        <button type="Button" className="Btn Btn__Danger">
          Delete <span className="Visually-Hidden">{props.name}</span>
        </button>
      </div>
        </li>
    
    )
    }


export default Todo