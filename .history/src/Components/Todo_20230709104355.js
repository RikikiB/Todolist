import React from 'react';


function Todo() {
    return(
        <li className="Todo Stack-Small">
            <div className="C-CB">
            <input id="Todo0" type="Checkbox" defaultChecked={true} />
        <label className="TodoLabel" htmlFor="Todo-0">
          Eat
        </label>
            </div>
            <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
            

            </li>
    
    )

    


}


export default Todo