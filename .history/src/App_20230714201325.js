import Todo from "./Components/Todo";
import Form from "./components/Form";
import FilterBtn from "./components/FilterBtn";



function App(props) {
  const taskList = props.tasks?.map((task) =>  <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>);

  return (
    <div className="TodoApp">
      <h1>My Todo's</h1>
      <h1>Needs To Be Done</h1>
      
export default App;
