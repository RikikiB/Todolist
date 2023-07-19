import Todo from "./Components/Todo";

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
      <button type="Submit" className="btn btn__primary btn__lg">
          Add
        </button>
      <div className="Filters btn-Group Stack-Exception">
        <button type="button" className="btn toggle-btn" aria-pressed="True">
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
        <Todo Name="Eat"/>
        <Todo Name="Clean"/>
        <Todo Name="Repeat"/>
      </ul>
      
    </div>
  );
}

export default App;
