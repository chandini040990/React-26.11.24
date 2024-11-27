// I have an array of objects contains the task list, i need to filter the completed tasks

const App = () => {
  const tasks = [
    {id: 1, title: "Learn React", completed: false},
    {id: 2, title: "Learn HTML", completed: true},
    {id: 3, title: "Learn CSS", completed: true},
    {id: 4, title: "Learn Javascript", completed: false},
  ];

  const completeTasks = tasks.filter((task) => task.completed)
 
  return(
    <div>
      <h1>completed Tasks</h1>
      <ul>
        {completeTasks.map((task) => (
          <li>{task.title}</li>
        ))}
      </ul>

    </div>
  )

} 

export default App


