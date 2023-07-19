import React from 'react';


function Todo() {
    return(
        <li className="Todo Stack-Small">
            <div className="C-CB">
            <input id="Todo0" type="Checkbox" defaultChecked={true} />
        <label className="TodoLabel" htmlFor="Todo0">
          Eat
        </label>
            </div>
            <div className="Btn-Group">
        <button type="Button" className="btn">
          Edit <span className="Visually-Hidden">Eat</span>
        </button>
        <button type="Button" className="Btn Btn__Danger">
          Delete <span className="Visually-Hidden">Eat</span>
        </button>
      </div>
        </li>
    
    )
    }


export default Todo