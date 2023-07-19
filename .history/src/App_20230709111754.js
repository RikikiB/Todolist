import Todo from "./components/Todo";

function App(props) {
  return (
    <div className="TodoApp">
      <h1>My Todo's</h1>
      <h1>Needs To Be Done</h1>
      <form>
        <h2 className="Label-Wrapper">
          <label htmlFor="New Todo" className="Label_Lg"></label> 
        </h2>
        <input type="Text" 
        id="New-Todo"
        className="Input Input-Lg"
        name="Text"
        autoComplete="Off"
        />
      </form>
      <button type="Submit" className="Btn Btn__Primary Btn__Lg">
          Add
        </button>
      <div className="Filters Btn-Group Stack-Exception">
        <button type="Button" className="Btn Toggle-Btn" Aria-Pressed="True">
          <span className="Visually-Hidden">Show </span>
          <span>all</span>
          <span className="Visually-Hidden"> Tasks</span>
        </button>
        <button type="Button" className="Btn Toggle-btn" Aria-Pressed="False">
          <span className="Visually-Hidden">Show </span>
          <span>Active</span>
          <span className="Visually-Hidden"> Tasks</span>
        </button>
        <button type="Button" className="Btn Toggle-Btn" Aria-Pressed="False">
          <span className="Visually-Hidden">Show </span>
          <span>Completed</span>
          <span className="Visually-Hidden"> Tasks</span>
        </button>
      </div>
      <h2 id="List-Heading">3 tasks remaining</h2>
      <ul
        role="List"
        className="TodoList Stack-Large Stack-Exception"
        Aria-Labelledby="List-Heading">
        <Todo/>
       
        <li className="Todo Stack-Small">
          <div className="C-CB">
            <input id="Todo1" type="Checkbox" />
            <label className="Todo-Label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="Btn-group">
            <button type="Button" className="Btn">
              Edit <span className="Visually-Hidden">Sleep</span>
            </button>
            <button type="Button" className="Btn Btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="Todo Stack-Small">
          <div className="C-CB">
            <input id="Todo2" type="Checkbox" />
            <label className="Todo-label" htmlFor="Todo2">
              Repeat
            </label>
          </div>
          <div className="Btn-group">
            <button type="Button" className="Btn">
              Edit <span className="Visually-Hidden">Repeat</span>
            </button>
            <button type="Button" className="Btn Btn__Danger">
              Delete <span className="Visually-Hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
      
    </div>
  );
}

export default App;
