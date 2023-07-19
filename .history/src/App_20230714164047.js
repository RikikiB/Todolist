import Todo from "./Components/Todo";



function App(props) {
  const taskList = props.tasks?.map((task) =>  <Todo id={task.id} name={task.name} completed={task.completed} />);

  return (
    <div className="TodoApp">
      <h1>My Todo's</h1>
      <h1>Needs To Be Done</h1>
      <form>
        <h2 className="Label-Wrapper">
          <label htmlFor="New Todo" className="Label_Lg"></label> 
        </h2>
        <input type="text" 
        id="New-Todo"
        className="input input-lg"
        name="text"
        autoComplete="off"
        />
      </form>
      <button type="Submit" className="btn btn__primary btn__lg">
          Add
        </button>
      <div className="filters btn-group stack-exception">
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
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
      
    </div>
  );
}
export default App;
