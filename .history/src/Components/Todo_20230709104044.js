import React from 'react';


function Todo() {
    return(
        <li className="Todo Stack-Small">
            <div className="C-CB">
            <input id="Todo0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
            </div>
            </li>
    
    )

    


}


export default Todo