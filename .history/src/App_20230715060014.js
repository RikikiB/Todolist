import Todo from "./Components/Todo";
import Form from "./Components/Form";
import FilterBtn from "./Components/FilterBtn";
import { useState } from "react";








function App(props) {
  
  const taskList = props.tasks.map((task) => (
    <Todo id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id} />
  ));
  function addTask(name) {
    alert(name);
  }
  
  return (
    <div className="TodoApp">
      <h1>Kiki's Todo's</h1>
      {/* <h1>Needs To Be Done</h1> */}
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterBtn />
        <FilterBtn />
        <FilterBtn />
      </div>
      <h2 id="list-heading">3 Tasks Remaining</h2>
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
