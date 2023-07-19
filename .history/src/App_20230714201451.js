import Todo from "./Components/Todo";
import Form from "./Components/Form";
import FilterBtn from "./components/FilterBtn";



function App(props) {
  const taskList = props.tasks?.map((task) =>  <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>);

  return (
    <div className="TodoApp">
      <h1>My Todo's</h1>
      <h1>Needs To Be Done</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterBtn />
        <FilterBtn />
        <FilterBtn />
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
