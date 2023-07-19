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
            <div className="Btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
        </li>
    
    )

    


}


export default Todo