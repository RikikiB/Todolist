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
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> Tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="False">
          <span className="visually-hidden">Show </span>
          <span>active</span>
          <span className="visually-hidden"> Tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="False">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> Tasks</span>
        </button>
      </div>
      <h2 id="List-Heading">3 tasks remaining</h2>
      <ul
        role="List"
        className="TodoList stack-Large Stack-Exception"
        aria-labelledby="List-Heading">
        <Todo Name="Eat"/>
        <Todo Name="Clean"/>
        <Todo Name="Repeat"/>
      </ul>
      
    </div>
  );
}

export default App;
